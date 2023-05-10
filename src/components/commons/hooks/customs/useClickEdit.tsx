import { useRouter } from "next/router";
import { useMutationEdit } from "../mutation/useMutationEdit";
import { IItemWrite } from "./useClickItemWrite";
import { Modal } from "antd";
import { ChangeEvent, useState } from "react";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import { useMutationUpload } from "../mutation/useMutationUpload";
import { IUpdateUseditemInput } from "../../../../commons/types/generated/types";

export const useClickEdit = (props: IItemWrite) => {
  const router = useRouter();
  const [updateItem] = useMutationEdit();
  const [fileUrls, setFileUrls] = useState(["", "", ""]);
  const [uploadFile] = useMutationUpload();
  const [address, setAddress] = useState("");

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationFile(file);
    if (!isValid) return;
    try {
      const result = await uploadFile({ variables: { file } });
      const fileUrl = result?.data?.uploadFile?.url;
      if (fileUrl) {
        onChangeFileUrls(fileUrl, Number(event?.target.id));
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  const onChangeFileUrls = (fileUrl: string, index: number): void => {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  };

  const onClickEdit = async (data: IItemWrite) => {
    const currentFiles = JSON.stringify(fileUrls);
    // const defaultFiles = JSON.stringify(props.data?.fetchUseditem.images);
    const defaultFiles = JSON.stringify(
      props.data?.fetchUseditem?.images || []
    );

    const isChangedFiles = currentFiles !== defaultFiles;

    const updateItemInput: IUpdateUseditemInput = {};
    if (address !== "") {
      updateItemInput.useditemAddress = {};
      if (address !== "") updateItemInput.useditemAddress.address = address;
    }
    if (isChangedFiles || fileUrls[0] === "") {
      // 파일 선택하지 않았을 때, 기존의 이미지 URL 리스트 사용
      updateItemInput.images = fileUrls;
    }
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
            useditemAddress: {
              address: address,
            },
          },
        },
      });
      if (result.data?.updateUseditem._id === undefined) {
        alert("요청에 문제가 있습니다.");
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
