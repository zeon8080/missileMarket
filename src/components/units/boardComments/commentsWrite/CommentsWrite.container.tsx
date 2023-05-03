import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentsWrite.queries";
import type { ICommentsWrite } from "./CommentsWrite.type";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationUpdateBoardCommentArgs,
  IUpdateBoardCommentInput,
} from "../../../../commons/types/generated/types";
import CommentsWriteUI from "./CommentsWrite.presenter";
import { Modal } from "antd";
import { FETCH_COMMENT } from "../commentsList/CommentsList.queries";

export default function CommentsWrite(props: ICommentsWrite): JSX.Element {
  const router = useRouter();

  const [createBoardComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_COMMENT);

  const [updateBoardComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationUpdateBoardCommentArgs
  >(UPDATE_COMMENT);

  const [writer, setCommentWriter] = useState("");
  const [contents, setCommentContents] = useState("");
  const [password, setCommentPassword] = useState("");

  const onChangeCommentWriter = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCommentWriter(event.target.value);
  };

  const onChangeCommentContents = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCommentContents(event.target.value);
  };

  const onChangeCommentPassword = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setCommentPassword(event.target.value);
  };

  const onClickCommentBtn = async (): Promise<void> => {
    if (writer && password && contents) {
      try {
        if (typeof router.query.boardId !== "string") {
          Modal.error({ content: "시스템에 문제가 있습니다." });
          return;
        }
        await createBoardComment({
          variables: {
            boardId: String(router.query.boardId),
            createBoardCommentInput: {
              writer,
              contents,
              password,
              rating: 1,
            },
          },
          refetchQueries: [
            {
              query: FETCH_COMMENT,
              variables: { boardId: router.query.boardId },
            },
          ],
        });
      } catch (error) {
        if (error instanceof Error)
          Modal.error({ content: "댓글 등록에 실패했습니다." });
      }
      Modal.success({
        content: "등록되었습니다.",
      });
    }
    setCommentWriter("");
    setCommentPassword("");
    setCommentContents("");
  };

  const onClickUpdateBtn = async (): Promise<void> => {
    if (password === "") {
      Modal.error({ content: "비밀번호가 입력되지 않았습니다." });
      return;
    }
    try {
      const updateBoardCommentInput: IUpdateBoardCommentInput = {};
      if (contents !== "") updateBoardCommentInput.contents = contents;
      if (typeof props.el?._id !== "string") {
        Modal.error({ content: "시스템에 문제가 있습니다." });
        return;
      }
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents,
            rating: 1,
          },
          password,
          boardCommentId: String(props.el?._id),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENT,
            variables: { boardId: router.query.boardId },
          },
        ],
      });

      props.setIsEdit?.(false);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글 수정에 실패했습니다." });
    }
  };

  return (
    <CommentsWriteUI
      writer={writer}
      password={password}
      contents={contents}
      value={1}
      onClickCommentBtn={onClickCommentBtn}
      onChangeCommentWriter={onChangeCommentWriter}
      onChangeCommentContents={onChangeCommentContents}
      onChangeCommentPassword={onChangeCommentPassword}
      onClickUpdateBtn={onClickUpdateBtn}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
