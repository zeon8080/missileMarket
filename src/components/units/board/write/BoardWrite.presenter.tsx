import { v4 as uuidv4 } from "uuid";
import { IBoardWriteUI } from "./BoardWrite.types";
import * as S from "./BoardWrite.styles";
import UploadBasic from "../../../commons/uploadBasic/UploadBasic.container";

export default function BoardWriteUI(props: IBoardWriteUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.WrapperTitle>
          게시글 {props.isEdit ? "수정" : "등록"}
          <span>* 필수 항목</span>
        </S.WrapperTitle>
        <S.DivideLine></S.DivideLine>
        <S.UserInfoBox>
          <div>작성자*</div>
          <input
            type="text"
            onChange={props.changeWriter}
            placeholder="이름을 입력해주세요"
            defaultValue={props.data?.fetchBoard.writer ?? ""}
          />
        </S.UserInfoBox>
        <S.Errors>{props.writerErr}</S.Errors>

        <S.DivideLineGray></S.DivideLineGray>
        <S.UserInfoBox>
          <div>비밀번호*</div>
          <input
            type="password"
            onChange={props.changePassword}
            placeholder="비밀번호를 입력해주세요"
          />
        </S.UserInfoBox>
        <S.Errors>{props.passwordErr}</S.Errors>
        <S.DivideLine></S.DivideLine>
        <S.TitleBox>
          <div>제목*</div>
          <input
            type="text"
            onChange={props.changeTitle}
            placeholder="제목을 입력해주세요."
            defaultValue={props.data?.fetchBoard.title}
          />
        </S.TitleBox>
        <S.Errors>{props.titleErr}</S.Errors>
        <S.DivideLineGray></S.DivideLineGray>
        <S.ContentsBox>
          <div>내용*</div>
          <textarea
            onChange={props.changeContents}
            placeholder="내용을 입력해주세요."
            defaultValue={props.data?.fetchBoard.contents}
          />
        </S.ContentsBox>
        <S.Errors>{props.contentsErr}</S.Errors>
        <S.DivideLineGray></S.DivideLineGray>

        <S.ImageBox>
          <div>사진 등록</div>
          {props.fileUrls.map((el, index) => (
            <UploadBasic
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImageBox>
        <S.DivideLineGray></S.DivideLineGray>
        <S.YoutubeBox>
          <div>유튜브</div>
          <input
            type="text"
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
            placeholder="링크를 복사해주세요."
          />
        </S.YoutubeBox>
        <S.DivideLine></S.DivideLine>
        <S.BtnBox>
          {props.isEdit ? (
            <S.EditBtn
              onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
            >
              수정 하기
            </S.EditBtn>
          ) : (
            <S.SubmitBtn
              isActive={props.isActive}
              onClick={props.isEdit ? props.onClickEdit : props.onClickSubmit}
            >
              등록 하기
            </S.SubmitBtn>
          )}
        </S.BtnBox>
      </S.Wrapper>
    </S.Container>
  );
}
