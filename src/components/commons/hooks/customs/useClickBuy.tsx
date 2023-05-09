import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationBuy } from "../mutation/useMutationBuy";
import { FETCH_ITEMS_LIST } from "../query/useQueryItems";

export const useClickBuy = () => {
  const router = useRouter();
  const [buying] = useMutationBuy();
  const onClickBuy = async () => {
    try {
      await buying({
        variables: {
          useritemId: String(router.query.itemId),
        },
        refetchQueries: [
          {
            query: FETCH_ITEMS_LIST,
          },
        ],
      });
      Modal.success({ content: "상품을 구매하였습니다." });
      router.push("/items");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return { onClickBuy };
};
