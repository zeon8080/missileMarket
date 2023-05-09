import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useClickDeleteItem } from "../../../commons/hooks/customs/useClickDelete";
import { useClickBuy } from "../../../commons/hooks/customs/useClickBuy";
import { useClickBasket } from "../../../commons/hooks/customs/useClickBasket";
import { useQueryItem } from "../../../commons/hooks/query/useQueryItem";
import * as S from "./ItemDetail.styles";
import DOMPurify from "dompurify";
import QuestionWrite from "../../usedItemQuestion/questionWrite/questionWrite.index";
import QuestionList from "../../usedItemQuestion/questionList/questionList.index";

export default function ItemDetail(): JSX.Element {
  const router = useRouter();
  const { onClickDeleteItem } = useClickDeleteItem();
  const { onClickBuy } = useClickBuy();
  const { onClickBasket } = useClickBasket();
  const { data } = useQueryItem();
  const [, setBasketState] = useState();

  const onClickMoveEdit = () => {
    void router.push(`/items/${router.query.itemId}/edit`);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const basketFunc = () => {
        let basketRecent = JSON.parse(localStorage.getItem("todays") || "null");
        setBasketState(basketRecent);
      };

      basketFunc();
    }
  }, []);

  return (
    <S.Container>
      <S.TopWrapper>
        <S.ImageBox>
          {data?.fetchUseditem.images?.[0] ? (
            <img
              src={`https://storage.googleapis.com/${data?.fetchUseditem.images?.[0]}`}
            />
          ) : (
            <img src="/empty.png" />
          )}
        </S.ImageBox>

        <S.TopBox>
          <div>
            <span>{data?.fetchUseditem?.name}</span>
            <S.EditBtnBox>
              <button onClick={onClickMoveEdit}>수정</button>
              <button onClick={onClickDeleteItem}>삭제</button>
            </S.EditBtnBox>
          </div>
          <div>{data?.fetchUseditem.price} 원</div>
          <S.DivideLine></S.DivideLine>
          <div>{data?.fetchUseditem?.remarks}</div>
          <S.DivideLineGray></S.DivideLineGray>
          <S.BtnBox>
            <button>찜</button>
            <button>장바구니</button>
            <button onClick={onClickBuy}>바로 구매</button>
          </S.BtnBox>
        </S.TopBox>
      </S.TopWrapper>
      <S.BodyWrapper>
        <S.LeftBox>
          <div>상품 정보</div>
          <div></div>
          <S.ImgBox>
            {data?.fetchUseditem.images?.[1] ? (
              <img
                src={`https://storage.googleapis.com/${data?.fetchUseditem.images?.[1]}`}
              />
            ) : (
              <div></div>
            )}
            {data?.fetchUseditem.images?.[2] ? (
              <img
                src={`https://storage.googleapis.com/${data?.fetchUseditem.images?.[2]}`}
              />
            ) : (
              <div></div>
            )}
          </S.ImgBox>
          <div>
            {typeof window !== "undefined" && (
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    String(data?.fetchUseditem?.contents)
                  ),
                }}
              />
            )}
          </div>
          <S.LocationBox>
            {data?.fetchUseditem.useditemAddress?.address && (
              <>
                <div>위치</div>
                <div></div>
                <div>{data?.fetchUseditem.useditemAddress?.address}</div>
              </>
            )}
          </S.LocationBox>
        </S.LeftBox>
        <S.RightBox>
          <div>상점 정보</div>
          <S.DivideLine></S.DivideLine>
          <div>{data?.fetchUseditem?.seller?.name}</div>
          <S.DivideLineGray></S.DivideLineGray>
          <div>댓글</div>
          <S.DivideLine></S.DivideLine>
          <QuestionWrite />
          <QuestionList />
        </S.RightBox>
      </S.BodyWrapper>
    </S.Container>
  );
}
