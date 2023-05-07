import { useRouter } from "next/router";
import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();

  const onClickMoveBoards = () => {
    void router.push("http://localhost:3000");
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src="/nameLogo.png" onClick={onClickMoveBoards} />
        <div>
          <span>로그인</span>
          <span>회원가입</span>
          <span>장바구니</span>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
