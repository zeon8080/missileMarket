import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useClickLogin } from "../../commons/hooks/customs/useClickLogin";
import { ILoginFormData } from "./LoginType";
import * as S from "./LoginStyles";
import { schema } from "./LoginValidation";

export default function LoginForm(): JSX.Element {
  const router = useRouter();
  const { onClickLogin } = useClickLogin();
  const { register, handleSubmit, formState } = useForm<ILoginFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickMoveJoin = (): void => {
    void router.push("/join");
  };

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      <S.Container>
        <S.Wrapper>
          <S.Title>로그인</S.Title>
          <S.LoginBox>
            <input type="text" placeholder="이메일" {...register("email")} />
            <p>{formState.errors.email?.message}</p>
          </S.LoginBox>
          <S.LoginBox>
            <input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
            <p>{formState.errors.password?.message}</p>
          </S.LoginBox>
          <S.ButtonBox>
            <button>로그인</button>
            <div>
              <span>아직 회원이 아니신가요?</span>
              <button type="button" onClick={onClickMoveJoin}>
                회원가입
              </button>
            </div>
          </S.ButtonBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
