import { useRouter } from "next/router";
import * as S from "./layoutHeaderStyles";
import { useMutation, useQuery } from "@apollo/client";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { FETCH_USER } from "../../hooks/query/useQueryUser";
import { LOGOUT_USER } from "../../hooks/mutation/useMutationLogOut";

export default function LayoutHeader(): JSX.Element {
  const router = useRouter();
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);

  const onClickMoveBoards = () => {
    void router.push("http://localhost:3000");
  };
  const onClickMoveLogin = () => {
    void router.push("/login");
  };

  const onClickMoveJoin = () => {
    void router.push("/join");
  };

  const onClickLogout = async () => {
    await logoutUser();
    window.location.reload();
  };

  return (
    <S.Container>
      {data?.fetchUserLoggedIn ? (
        <S.Wrapper>
          <S.Logo src="/nameLogo.png" onClick={onClickMoveBoards} />
          <div>
            <span>{data?.fetchUserLoggedIn.name} 님</span>
            <span>{data?.fetchUserLoggedIn.userPoint?.amount} P</span>
            <span onClick={onClickLogout}>로그아웃</span>
            <span>장바구니</span>
          </div>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.Logo src="/nameLogo.png" onClick={onClickMoveBoards} />
          <div>
            <span onClick={onClickMoveLogin}>로그인</span>
            <span onClick={onClickMoveJoin}>회원가입</span>
            <span>장바구니</span>
          </div>
        </S.Wrapper>
      )}
    </S.Container>
  );
}
