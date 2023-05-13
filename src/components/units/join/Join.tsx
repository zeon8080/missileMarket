import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./JoinValidation";
import { useForm } from "react-hook-form";
import { useClickJoin } from "../../commons/hooks/customs/useClickJoin";
import { IJoinFormData } from "./JoinType";
import * as S from "./JoinStyles";
import { useRouter } from "next/router";

export default function JoinForm() {
  const router = useRouter();
  const { onClickJoin } = useClickJoin();
  const { register, handleSubmit, formState } = useForm<IJoinFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickMoveLogin = (): void => {
    void router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit(onClickJoin)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>회원 가입</S.Title>
          <S.JoinBox>
            <span>이메일</span>
            <input type="text" {...register("email")} />
            <p>{formState.errors.email?.message}</p>
          </S.JoinBox>
          <S.JoinBox>
            <span>이름</span>
            <input type="text" {...register("name")} />
            <p>{formState.errors.name?.message}</p>
          </S.JoinBox>
          <S.JoinBox>
            <span>비밀번호</span>
            <input type="password" {...register("password")} />
            <p>{formState.errors.password?.message}</p>
          </S.JoinBox>
          <S.JoinBox>
            <span>비밀번호</span>
            <input type="password" {...register("passwordCheck")} />
            <p>{formState.errors.passwordCheck?.message}</p>
          </S.JoinBox>
          <S.ButtonBox>
            <button>가입하기</button>
            <div>
              <span>이미 회원이신가요?</span>
              <button type="button" onClick={onClickMoveLogin}>
                로그인
              </button>
            </div>
          </S.ButtonBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
