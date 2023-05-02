import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import type { MouseEvent, ChangeEvent } from "react";
import { useState } from "react";
import _ from "lodash";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS_COUNT, FETCH_BOARDS_LISTS } from "./BoardList.queries";
import BoardListsUI from "./BoardList.presenter";

export default function BoardList(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS_LISTS);
  const { data: dataBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);
  const [keyword, setKeyword] = useState("");

  const onClickMoveBoard = (): void => {
    void router.push("/boards/new");
  };

  const onClickMoveBoardDetail = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(`/boards/${event.currentTarget.id}`);
  };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 700);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <BoardListsUI
      data={data}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardsCount}
      onClickMoveBoard={onClickMoveBoard}
      onClickMoveBoardDetail={onClickMoveBoardDetail}
      onChangeSearch={onChangeSearch}
      keyword={keyword}
    />
  );
}
