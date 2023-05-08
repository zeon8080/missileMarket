import { useRouter } from "next/router";
import { useState } from "react";
import { useMutationQuestionEdit } from "../mutation/useMutationQuestionEdit";
import { FETCH_QUESTIONS } from "../query/useQueryQuestion";
import { Modal } from "antd";

export const useClickQuestionEdit = () => {
  const router = useRouter();
  const [updateQuestion] = useMutationQuestionEdit();
  const [myIndex, setMyIndex] = useState(-1);

  const onClickQuestionEdit = (event: any) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const onClickQuestionEditSubmit = async (data: any, event: any) => {
    try {
      await updateQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.itemId },
          },
        ],
      });
      setMyIndex(-1);
      Modal.success({ content: "수정되었습니다." });
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };
  return { myIndex, onClickQuestionEdit, onClickQuestionEditSubmit };
};
