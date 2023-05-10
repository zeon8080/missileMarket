import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIPickedArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./Picked.styles";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import _ from "lodash";
import { FETCH_PICKED } from "../../../commons/hooks/query/useQueryPicked";

export default function PickedPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIPicked">,
    IQueryFetchUseditemsIPickedArgs
  >(FETCH_PICKED, {
    variables: { search: "" },
  });

  const onLoadMore = (): void => {
    if (!data) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemsIPicked.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsIPicked === undefined) {
          return {
            fetchUseditemsIPicked: [...prev.fetchUseditemsIPicked],
          };
        }
        return {
          fetchUseditemsIPicked: [
            ...(prev.fetchUseditemsIPicked ?? []),
            ...(fetchMoreResult.fetchUseditemsIPicked ?? []),
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
        {data?.fetchUseditemsIPicked.map((el) => (
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
