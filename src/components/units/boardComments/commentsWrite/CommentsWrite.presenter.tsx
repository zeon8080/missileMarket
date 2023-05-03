import { ICommentsWriteUI } from "./CommentsWrite.type";
import * as S from "./CommentsWrite.styles";

export default function CommentsWriteUI(props: ICommentsWriteUI): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.UserBox>
          <input
            type="text"
            placeholder="작성자"
            onChange={props.onChangeCommentWriter}
            value={props.writer !== "" ? props.writer : props.el?.writer ?? ""}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangeCommentPassword}
            value={props.password}
          />
        </S.UserBox>
        <div>
          <S.ContentsBox
            maxLength={80}
            placeholder="개인정보를 공유 및 요청하거나, 명예훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeCommentContents}
            value={
              props.contents !== "" ? props.contents : props.el?.contents ?? ""
            }
          />
          <S.BtnBox>
            <span>
              {props.contents !== ""
                ? props.contents.length
                : props.el?.contents.length ?? 0}
              /80
            </span>
            <button
              onClick={
                props.isEdit === true
                  ? props.onClickUpdateBtn
                  : props.onClickCommentBtn
              }
            >
              등록
            </button>
          </S.BtnBox>
        </div>
        <S.DivideLine></S.DivideLine>
      </S.Wrapper>
    </S.Container>
  );
}
