import { useForm } from "react-hook-form";
import { useClickQuestion } from "../../../commons/hooks/customs/useClickQuestion";
import * as S from "./questionWrite.styles";
import { ICreateUseditemQuestionInput } from "../../../../commons/types/generated/types";

export default function QuestionWrite(): JSX.Element {
  const { onClickQuestion } = useClickQuestion();
  const { register, handleSubmit, setValue } =
    useForm<ICreateUseditemQuestionInput>();

  return (
    <form onSubmit={handleSubmit(onClickQuestion(setValue))}>
      <S.Container>
        <textarea {...register("contents")} />
        <button>작성</button>
      </S.Container>
    </form>
  );
}
