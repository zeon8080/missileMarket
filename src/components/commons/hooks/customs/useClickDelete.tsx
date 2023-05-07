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
          useditemId: String(router.query.useditemId),
        },
      });
      Modal.success({ content: "삭제되었습니다." });
      router.push("http://localhost:3000");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "상품 삭제 권한이 없습니다." });
    }
  };
  return { onClickDeleteItem };
};
