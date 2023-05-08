import { useRouter } from "next/router";
import { useMutationQuestion } from "../mutation/useMutationQuestion";
import { FETCH_QUESTIONS } from "../query/useQueryQuestion";
import { useMutationQuestionDelete } from "../mutation/useMutationQuestionDelete";
import { Modal } from "antd";
export interface IQuestionWrite {
  contents?: string;
}

export const useClickQuestion = () => {
  const router = useRouter();
  const [createQuestion] = useMutationQuestion();
  const [deleteQuestion] = useMutationQuestionDelete();

  const onClickQuestion = async (data: IQuestionWrite) => {
    try {
      await createQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: String(data.contents),
          },
          useditemId: String(router.query.itemId),
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.itemId },
          },
        ],
      });
      Modal.success({ content: "댓글이 등록되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글 등록에 실패했습니다." });
    }
  };

  const onClickQuestionDelete = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    try {
      await deleteQuestion({
        variables: {
          useditemQuestionId: event.currentTarget.id,
        },
        refetchQueries: [
          {
            query: FETCH_QUESTIONS,
            variables: { useditemId: router.query.itemId },
          },
        ],
      });
      Modal.success({ content: "삭제되었습니다." });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "댓글 등록에 실패했습니다." });
    }
  };

  return { onClickQuestion, onClickQuestionDelete };
};
