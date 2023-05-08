import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  ICreateUseditemQuestionInput,
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_QUESTIONS } from "../../../commons/hooks/query/useQueryQuestion";
import { useClickQuestion } from "../../../commons/hooks/customs/useClickQuestion";
import { useClickQuestionEdit } from "../../../commons/hooks/customs/useClickQuestionEdit";
import * as S from "./questionList.styles";

export default function QuestionList() {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_QUESTIONS, {
    variables: {
      useditemId: String(router.query.itemId),
    },
  });
  const { register, handleSubmit } = useForm<ICreateUseditemQuestionInput>();
  const { onClickQuestionDelete } = useClickQuestion();
  const { myIndex, onClickQuestionEdit, onClickQuestionEditSubmit } =
    useClickQuestionEdit();

  return (
    <>
      {data?.fetchUseditemQuestions.map((el, index) =>
        index !== myIndex ? (
          <S.Container key={el._id}>
            <S.Wrapper>
              <S.ContentsBox>
                <div>{el.user.name}</div>
                <div>{el.createdAt.slice(5, 10)}</div>
              </S.ContentsBox>
              <div>{el.contents}</div>
            </S.Wrapper>

            <S.BtnBox>
              <button onClick={onClickQuestionEdit} id={String(index)}>
                수정
              </button>
              <button id={el._id} onClick={onClickQuestionDelete}>
                삭제
              </button>
            </S.BtnBox>
          </S.Container>
        ) : (
          <form onSubmit={handleSubmit(onClickQuestionEditSubmit)} id={el._id}>
            <S.Container key={el._id}>
              <S.Wrapper>
                <S.ContentsBox>
                  <div>{el.user.name}</div>
                  <div>{el.createdAt.slice(5, 10)}</div>
                </S.ContentsBox>
                <S.Text
                  {...register("contents")}
                  defaultValue={data?.fetchUseditemQuestions[index].contents}
                ></S.Text>
              </S.Wrapper>

              <S.BtnBox>
                <button id={String(index)}>수정</button>
              </S.BtnBox>
            </S.Container>
          </form>
        )
      )}
    </>
  );
}
