import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_ITEMS_LIST } from "../../../commons/hooks/query/useQueryItems";
import _ from "lodash";
import * as S from "./ItemList.styles";

export default function ItemList(): JSX.Element {
  const router = useRouter();
  const { data, fetchMore, refetch } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_ITEMS_LIST);
  const [, setKeyword] = useState("");

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  const onClickMoveDetail =
    (el: IUseditem) => (event: MouseEvent<HTMLDivElement>) => {
      onClickToday(el);
      void router.push(`/items/${event?.currentTarget.id}`);
    };
  const onClickToday = (today: IUseditem) => {
    const todays: IUseditem[] = JSON.parse(
      sessionStorage.getItem("todays") ?? "[]"
    );

    todays.unshift(today);

    sessionStorage.setItem("todays", JSON.stringify(todays));
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
        <button>상품 등록</button>
      </S.SearchBox>
      <S.Scroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditems.map((el) => (
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
