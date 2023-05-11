import { useQuery } from "@apollo/client";
import * as S from "./recentStyles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FETCH_PICKED_COUNT } from "../../hooks/query/useQueryPicked";
import { IQuery } from "../../../../commons/types/generated/types";

export default function LayoutRecent() {
  const router = useRouter();
  const [todayList, setTodayList] = useState<any>();
  const { data } =
    useQuery<Pick<IQuery, "fetchUseditemsCountIPicked">>(FETCH_PICKED_COUNT);

  const onClickMoveMyPage = () => {
    void router.push("/myPage");
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const todayFunc = () => {
        let recent = JSON.parse(sessionStorage.getItem("todays") || "null");
        if (recent !== null) setTodayList(recent.slice(0, 3));
      };
      todayFunc();
    }
  }, []);

  const onClickMoveDetail = (event: React.MouseEvent<HTMLDivElement>) => {
    void router.push(`/items/${event?.currentTarget.id}`);
  };

  return (
    <>
      <S.Box>
        <S.Page onClick={onClickMoveMyPage}>마이페이지</S.Page>
        <S.DivideLine></S.DivideLine>
        <S.PickBox onClick={onClickMoveMyPage}>
          <div>찜한 상품</div>
          <S.Picked>
            <S.Heart></S.Heart>
            <span>{data?.fetchUseditemsCountIPicked}</span>
          </S.Picked>
        </S.PickBox>
        <S.DivideLine></S.DivideLine>
        <S.Title>최근본상품</S.Title>

        {todayList ? (
          todayList.map((el: { _id: string; images: string }) => (
            <S.ImgBox id={el._id} onClick={onClickMoveDetail}>
              <img
                src={
                  el.images[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/empty.png"
                }
              />
            </S.ImgBox>
          ))
        ) : (
          <S.RecentBox>
            <img src="/search.png" />
            <span>없음</span>
          </S.RecentBox>
        )}
      </S.Box>
    </>
  );
}
