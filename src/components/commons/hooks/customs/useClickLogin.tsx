import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import { useMutationLogin } from "../mutation/useMutationLogin";
import { Modal } from "antd";
import { ILoginFormData } from "../../../units/login/LoginType";

export const useClickLogin = () => {
  const router = useRouter();
  const [user] = useMutationLogin();
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogin = async (data: ILoginFormData): Promise<void> => {
    try {
      if (data.email && data.password) {
        const result = await user({
          variables: {
            email: data.email,
            password: data.password,
          },
        });
        const accessToken = result.data?.loginUser.accessToken;
        console.log(accessToken);

        if (accessToken === undefined) {
          Modal.error({ content: "로그인에 실패했습니다." });
          return;
        }
        setAccessToken(accessToken);
        void router.push("/items");
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return { onClickLogin };
};
