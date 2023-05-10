import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_ITEMS } from "../../../commons/hooks/query/useQueryUserItem";
import * as S from "./ItemWrited.stlyes";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import _ from "lodash";

export default function SoldItemListPage() {
  const router = useRouter();
  const [, setKeyword] = useState("");
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsISold">,
    IQueryFetchUseditemsISoldArgs
  >(FETCH_USER_ITEMS);

  const onLoadMore = (): void => {
    if (!data) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemsISold.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsISold === undefined) {
          return {
            fetchUseditemsISold: [...prev.fetchUseditemsISold],
          };
        }
        return {
          fetchUseditemsISold: [
            ...prev.fetchUseditemsISold,
            ...fetchMoreResult.fetchUseditemsISold,
          ],
        };
      },
    });
  };

  const onClickMoveDetail =
    (el: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
      void router.push(`/items/${event?.currentTarget.id}`);
    };

  const getDebounce = _.debounce((value) => {
    void refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 700);
  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    getDebounce(event.currentTarget.value);
  };

  return (
    <S.Container>
      <S.SearchBox>
        <input type="text" placeholder="검색" onChange={onChangeSearch} />
        {/* <button onClick={onClickMoveWrite}>상품 등록</button> */}
      </S.SearchBox>
      <S.Scroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemsISold.map((el) => (
          <S.ItemBox key={el._id} id={el._id} onClick={onClickMoveDetail(el)}>
            <S.ImgBox>
              <img
                src={
                  el.images && el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "empty.png"
                }
              />
            </S.ImgBox>
            <S.ContentsBox>
              <p id={el._id}>{el.name}</p>
              <S.Contents>
                <span id={el._id}>{el.price} 원</span>
                <span id={el._id}>{el.createdAt.slice(5, 10)}</span>
              </S.Contents>
            </S.ContentsBox>
          </S.ItemBox>
        )) ?? <div></div>}
      </S.Scroll>
    </S.Container>
  );
}
