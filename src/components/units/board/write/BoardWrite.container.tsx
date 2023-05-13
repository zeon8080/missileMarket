import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import type { ChangeEvent } from "react";
import { Modal } from "antd";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
  IUpdateBoardInput,
} from "../../../../commons/types/generated/types";
import { IBoardWrite } from "./BoardWrite.types";
import BoardWriteUI from "./BoardWrite.presenter";

export default function BoardWrite(props: IBoardWrite): JSX.Element {
  const router = useRouter();

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [writerErr, setWriteErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [titleErr, setTitleErr] = useState("");
  const [contentsErr, setContentsErr] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);

    if (writer && title && password && contents) {
      setIsActive(true);
    }

    if (event.target.value !== "") {
      setWriteErr("");
    }
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setPasswordErr("");
    }
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setTitleErr("");
    }
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (writer && title && password && contents) {
      setIsActive(true);
    }
    if (event.target.value !== "") {
      setContentsErr("");
    }
  }

  function onChangeYoutubeUrl(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  useEffect(() => {
    const images = props.data?.fetchBoard.images;
    if (images !== undefined && images !== null) setFileUrls([...images]);
  }, [props.data]);

  async function onClickSubmit() {
    if (!writer) {
      setWriteErr("작성자는 필수 항목입니다.");
    }
    if (!password) {
      setPasswordErr("비밀번호는 필수 항목입니다.");
    }
    if (!title) {
      setTitleErr("제목은 필수 항목입니다.");
    }

    if (!contents) {
      setContentsErr("내용은 필수 항목입니다.");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images: [...fileUrls],
            },
          },
        });
        Modal.success({
          content: "등록되었습니다.",
        });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: "등록에 실패하였습니다.",
          });
      }
    }
  }

  const onClickEdit = async (): Promise<void> => {
    const currentFiles = JSON.stringify(fileUrls);
    const defaultFiles = JSON.stringify(props.data?.fetchBoard.images);
    const isChangedFiles = currentFiles !== defaultFiles;

    if (password === "") {
      Modal.error({ content: "비밀번호를 입력해주세요." });
      return;
    } else {
      setIsActive(true);
    }

    const updateBoardInput: IUpdateBoardInput = {};

    if (title !== "") updateBoardInput.title = title;
    if (contents !== "") updateBoardInput.contents = contents;
    if (youtubeUrl !== "") updateBoardInput.youtubeUrl = youtubeUrl;
    if (isChangedFiles) updateBoardInput.images = fileUrls;

    try {
      if (typeof router.query.boardId !== "string") {
        alert("시스템에 문제가 있습니다.");
        return;
      }

      const result = await updateBoard({
        variables: {
          boardId: router.query.boardId,
          password,
          updateBoardInput,
        },
      });

      if (result.data?.updateBoard._id === undefined) {
        alert("요청에 문제가 있습니다.");
        return;
      }
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "비밀번호가 일치하지않습니다." });
    }
  };

  return (
    <BoardWriteUI
      changeWriter={onChangeWriter}
      changePassword={onChangePassword}
      changeTitle={onChangeTitle}
      changeContents={onChangeContents}
      onChangeYoutubeUrl={onChangeYoutubeUrl}
      onChangeFileUrls={onChangeFileUrls}
      onClickSubmit={onClickSubmit}
      onClickEdit={onClickEdit}
      writerErr={writerErr}
      passwordErr={passwordErr}
      titleErr={titleErr}
      contentsErr={contentsErr}
      isEdit={props.isEdit}
      data={props.data}
      isActive={isActive}
      fileUrls={fileUrls}
      isOpen={false}
    />
  );
}
