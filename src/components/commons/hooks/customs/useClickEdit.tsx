import { useRouter } from "next/router";
import { useMutationEdit } from "../mutation/useMutationEdit";
import { IItemWrite } from "./useClickItemWrite";
import { Modal } from "antd";
import { useRecoilState } from "recoil";
import { recoilAddress, recoilFileUrls } from "../../../../commons/stores";

export const useClickEdit = () => {
  const router = useRouter();
  const [updateItem] = useMutationEdit();
  const [fileUrls] = useRecoilState(recoilFileUrls);
  const [address] = useRecoilState(recoilAddress);
  const onClickEdit = async (data: IItemWrite) => {
    try {
      const result = await updateItem({
        variables: {
          useditemId: String(router.query.itemId),
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [...fileUrls],
            useditemAddress: { address },
          },
        },
      });
      if (result.data?.updateUseditem._id === undefined) {
        Modal.error({ content: "요청에 문제가 있습니다." });
        return;
      }
      Modal.success({ content: "수정 되었습니다!" });
      void router.push(`/items/${result.data?.updateUseditem._id}`);
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return { onClickEdit };
};
