import * as S from "./layoutHeaderStyles";

export default function LayoutHeader(): JSX.Element {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo src="/nameLogo.png" />
        <div>
          <span>로그인</span>
          <span>회원가입</span>
          <span>장바구니</span>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
