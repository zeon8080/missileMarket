import { IBoardDetailUI } from "./BoardDetail.types";
import { getDate } from "../../../../commons/libraries/util";
import * as S from "./BoardDetail.styles";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props: IBoardDetailUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>
          <span>{props.data?.fetchBoard?.title}</span>
          <S.UserInfo>
            <span>{props.data?.fetchBoard?.writer}</span>
            <span>{getDate(props.data?.fetchBoard?.createdAt)}</span>
          </S.UserInfo>
        </S.Top>
        <S.DivideLine></S.DivideLine>
        <S.ContentsBox>{props.data?.fetchBoard?.contents}</S.ContentsBox>
        <S.DivideLineGray></S.DivideLineGray>
        {props.data?.fetchBoard.images ? (
          props.data.fetchBoard.images
            .filter((el) => el)
            .map((el) => (
              <>
                <S.ImgBox key={el}>
                  <img src={`https://storage.googleapis.com/${el}`} />
                </S.ImgBox>
                <S.DivideLineGray></S.DivideLineGray>
              </>
            ))
        ) : (
          <div></div>
        )}
        {props.data?.fetchBoard?.youtubeUrl ? (
          <>
            <S.PlayerBox>
              <ReactPlayer
                url={String(props.data?.fetchBoard?.youtubeUrl)}
                controls
              />
            </S.PlayerBox>
            <S.DivideLineGray></S.DivideLineGray>
          </>
        ) : (
          <div></div>
        )}
        <S.BtnBox>
          <button onClick={props.onClickMoveList}>목록</button>
          <button onClick={props.onClickMoveEdit}>수정</button>
          <button onClick={props.onClickDelete}>삭제</button>
        </S.BtnBox>
        <S.DivideLine></S.DivideLine>
      </S.Wrapper>
    </S.Container>
  );
}
