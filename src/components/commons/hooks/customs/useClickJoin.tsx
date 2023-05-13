import { useRouter } from "next/router";
import { useMutationJoin } from "../mutation/useMutationJoin";
import { IJoinFormData } from "../../../units/join/JoinType";
import { Modal } from "antd";

export const useClickJoin = () => {
  const [createUser] = useMutationJoin();
  const router = useRouter();

  const onClickJoin = async (data: IJoinFormData): Promise<void> => {
    try {
      if (data.email && data.name && data.password === data.passwordCheck) {
        await createUser({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              name: data.name,
            },
          },
        });
        Modal.success({ content: "회원가입이 완료되었습니다." });
        void router.push("/login");
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return { onClickJoin };
};
