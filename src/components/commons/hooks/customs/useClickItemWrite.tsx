import { UseFieldArrayReturn } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useMutationItemWrite } from "../mutation/useMutationItemWrite";
import { useMutationUpload } from "../mutation/useMutationUpload";
import { checkValidationFile } from "../../../../commons/libraries/validationFile";
import { Modal } from "antd";
import { Address } from "react-daum-postcode";
import { useRecoilState } from "recoil";
import { recoilAddress, recoilFileUrls } from "../../../../commons/stores";

export interface IItemWrite {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  fileUrls?: UseFieldArrayReturn;
  isEdit?: boolean;
  data?: Pick<IQuery, "fetchUseditem">;
}

export const useClickItemWrite = () => {
  const router = useRouter();
  const [fileUrls, setFileUrls] = useRecoilState(recoilFileUrls);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useRecoilState(recoilAddress);
  const [createItem] = useMutationItemWrite();
  const [uploadFile] = useMutationUpload();

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

  const onCompleteAddress = (data: Address) => {
    setAddress(data.address);
    setIsOpen((prev) => !prev);
  };
  function onClickAddress() {
    setIsOpen((prev) => !prev);
  }
  const onClickItemWrite = async (data: IItemWrite) => {
    try {
      if (data.name && data.remarks && data.contents && data.price) {
        const result = await createItem({
          variables: {
            createUseditemInput: {
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
        Modal.success({ content: "상품이 등록되었습니다!" });
        void router.push(`/items/${result.data?.createUseditem._id}`);
      }
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };
  return {
    onClickItemWrite,
    onChangeFile,
    onChangeFileUrls,
    fileUrls,
    setFileUrls,
    onCompleteAddress,
    onClickAddress,
    isOpen,
    address,
    setAddress,
  };
};
