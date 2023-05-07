import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationBuy } from "../mutation/useMutationBuy";

export const useClickBuy = () => {
  const router = useRouter();
  const [buying] = useMutationBuy();
  const onClickBuy = async () => {
    await buying({
      variables: {
        useritemId: String(router.query.useditemId),
      },
    });
    Modal.success({ content: "상품을 구매하였습니다." });
  };

  return { onClickBuy };
};
