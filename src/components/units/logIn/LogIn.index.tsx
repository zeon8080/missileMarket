import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useClickLogin } from "../../commons/hooks/customs/useClickLogin";
import { ILogInFormData } from "./LogIn.type";
import * as S from "./Login.styles";
import { schema } from "./Login.validation";

export default function LoginForm() {
  const { onClickLogin } = useClickLogin();
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm<ILogInFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onClickJoin = (): void => {
    void router.push("/join");
  };
  return (
    <S.Container>
      <S.Wrapper>
        <form onSubmit={handleSubmit(onClickLogin)}>
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
              <button type="button">회원가입</button>
            </div>
          </S.ButtonBox>
        </form>
      </S.Wrapper>
    </S.Container>
  );
}
