import { useForm } from "react-hook-form";
import {
  IQuestionWrite,
  useClickQuestion,
} from "../../../commons/hooks/customs/useClickQuestion";
import * as S from "./questionWrite.styles";

export default function QuestionWrite(): JSX.Element {
  const { onClickQuestion } = useClickQuestion();
  const { register, handleSubmit } = useForm<IQuestionWrite>();

  return (
    <form onSubmit={handleSubmit(onClickQuestion)}>
      <S.Container>
        <textarea {...register("contents")} />
        <button>작성</button>
      </S.Container>
    </form>
  );
}
