import { useRouter } from "next/router";
import { useMutationEdit } from "../mutation/useMutationEdit";
import { IItemWrite } from "./useClickItemWrite";
import { Modal } from "antd";

export const useClickEdit = () => {
  const router = useRouter();
  const [updateItem] = useMutationEdit();

  const onClickEdit = async (data: IItemWrite) => {
    try {
      const result = await updateItem({
        variables: {
          useditemId: String(router.query.useditemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
          },
        },
      });
      Modal.success({ content: "수정 되었습니다!" });
      void router.push(`/items/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "상품 수정에 실패했습니다." });
    }
  };
  return { onClickEdit };
};
