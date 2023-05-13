import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsISoldArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USER_ITEMS } from "../../../commons/hooks/query/useQueryUserItem";
import * as S from "./ItemWritedStlyes";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function SoldItemListPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
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
            ...(prev.fetchUseditemsISold ?? []),
            ...(fetchMoreResult.fetchUseditemsISold ?? []),
          ],
        };
      },
    });
  };

  const onClickMoveDetail = (event: MouseEvent<HTMLDivElement>) => {
    void router.push(`/items/${event?.currentTarget.id}`);
  };

  return (
    <S.Container>
      <S.Scroll pageStart={0} loadMore={onLoadMore} hasMore={true}>
        {data?.fetchUseditemsISold.map((el) => (
          <S.ItemBox key={el._id} id={el._id} onClick={onClickMoveDetail}>
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
                <span id={el._id}>{el.price?.toLocaleString()} 원</span>
                <span id={el._id}>{el.createdAt.slice(5, 10)}</span>
              </S.Contents>
            </S.ContentsBox>
          </S.ItemBox>
        )) ?? <div></div>}
      </S.Scroll>
    </S.Container>
  );
}
