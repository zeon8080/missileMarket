import { useRouter } from "next/router";
import { Modal } from "antd";
import { useMutationDeleteItem } from "../mutation/useMutationDelete";

export const useClickDeleteItem = () => {
  const router = useRouter();
  const [deleteItem] = useMutationDeleteItem();

  const onClickDeleteItem = async () => {
    try {
      await deleteItem({
        variables: {
          useditemId: String(router.query.itemId),
        },
      });
      Modal.success({ content: "삭제되었습니다." });
      router.push("/");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return { onClickDeleteItem };
};
