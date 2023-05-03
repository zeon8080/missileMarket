import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import * as S from "./CommentsList.styles";
import { Modal } from "antd";
import { DELETE_COMMENT, FETCH_COMMENT } from "./CommentsList.queries";
import CommentsWrite from "../commentsWrite/CommentsWrite.container";

export default function CommentsListUIItem(props: any) {
  const router = useRouter();

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_COMMENT);

  const onClickUpdate = (): void => {
    setIsEdit(true);
  };
  const onClickDelete = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    // const password = prompt("비밀번호를 입력하세요.");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: props.el._id,
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.number },
          },
        ],
      });
      setIsOpenDeleteModal(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "비밀번호가 틀렸습니다." });
    }
    // Modal.success({ content: "댓글이 삭제되었습니다." });
    router.push(`/boards/${router.query.boardId}`);
  };
  const onClickOpenDeleteModal = (
    event: MouseEvent<HTMLButtonElement>
  ): void => {
    setIsOpenDeleteModal(true);
  };

  const onChangeDeletePassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  return (
    <>
      {isOpenDeleteModal && (
        <S.PasswordModal
          open={true}
          onOk={onClickDelete}
          onCancel={() => setIsOpenDeleteModal(false)}
        >
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onChangeDeletePassword} />
        </S.PasswordModal>
      )}
      {!isEdit ? (
        <S.Container key={props.el._id}>
          <S.Wrapper>
            <S.UserBox>
              <div>{props.el.writer}</div>
              <span>{props.el.createdAt.slice(0, 10)}</span>
            </S.UserBox>
            <S.Contents>{props.el.contents}</S.Contents>
            <S.BtnBox>
              <button onClick={onClickUpdate}>수정</button>
              <button onClick={onClickOpenDeleteModal}>삭제</button>
            </S.BtnBox>
          </S.Wrapper>
        </S.Container>
      ) : (
        <CommentsWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
