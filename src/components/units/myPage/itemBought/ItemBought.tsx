import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchUseditemsIBoughtArgs,
} from "../../../../commons/types/generated/types";
import * as S from "./ItemBoughtStyles";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOUGHT } from "../../../commons/hooks/query/useQueryBought";

export default function BoughtPage() {
  const router = useRouter();
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditemsIBought">,
    IQueryFetchUseditemsIBoughtArgs
  >(FETCH_BOUGHT);

  const onLoadMore = (): void => {
    if (!data) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditemsIBought.length ?? 10) / 10 + 1),
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditemsIBought === undefined) {
          return {
            fetchUseditemsIBought: [...prev.fetchUseditemsIBought],
          };
        }
        return {
          fetchUseditemsIBought: [
            ...(prev.fetchUseditemsIBought ?? []),
            ...(fetchMoreResult.fetchUseditemsIBought ?? []),
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
        {data?.fetchUseditemsIBought.map((el) => (
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
