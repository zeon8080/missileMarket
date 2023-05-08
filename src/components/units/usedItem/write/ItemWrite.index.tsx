import { v4 as uuidv4 } from "uuid";
import {
  IItemWrite,
  useClickItemWrite,
} from "../../../commons/hooks/customs/useClickItemWrite";
import { useQueryItem } from "../../../commons/hooks/query/useQueryItem";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./ItemWrite.validation";
import { LoginCheck } from "../../../commons/hocs/useAuth";
import { useClickEdit } from "../../../commons/hooks/customs/useClickEdit";
import "react-quill/dist/quill.snow.css";
import * as S from "./ItemWrite.styles";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import UploadBasic from "../../../commons/uploadBasic/UploadBasic.container";
import dynamic from "next/dynamic";
import { useState } from "react";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function ItemWrite(props: IItemWrite): JSX.Element {
  const [contents, setContents] = useState("");
  const { data } = useQueryItem();
  const {
    onClickItemWrite,
    onChangeFileUrls,
    fileUrls,
    onCompleteAddress,
    onClickAddress,
    isOpen,
    address,
  } = useClickItemWrite();
  const { onClickEdit } = useClickEdit();
  const { register, handleSubmit, formState, setValue, trigger } =
    useForm<IItemWrite>({
      resolver: yupResolver(schema),
      mode: "onChange",
    });
  const onChangeContents = (value: string): void => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
    setContents(value);
  };

  LoginCheck();

  return (
    <form
      onSubmit={
        props.isEdit
          ? handleSubmit(onClickEdit)
          : handleSubmit(onClickItemWrite)
      }
    >
      <S.Container>
        <S.Wrapper>
          <S.WrapperTitle>
            상품 {props.isEdit ? "수정" : "등록"}
            <span>* 필수 항목</span>
          </S.WrapperTitle>
          <S.DivideLine></S.DivideLine>
          <S.UserInfoBox>
            <div>상품명*</div>
            <input
              type="text"
              {...register("name")}
              defaultValue={data?.fetchUseditem.name ?? ""}
            />
          </S.UserInfoBox>
          <S.Errors>{formState.errors.name?.message}</S.Errors>
          <S.DivideLineGray></S.DivideLineGray>
          <S.UserInfoBox>
            <div>가격*</div>
            <input
              type="text"
              {...register("price")}
              defaultValue={data?.fetchUseditem.price ?? ""}
            />
          </S.UserInfoBox>
          <S.Errors>{formState.errors.price?.message}</S.Errors>
          <S.DivideLineGray></S.DivideLineGray>
          <S.UserInfoBox>
            <div>한줄 요약*</div>
            <input
              type="text"
              {...register("remarks")}
              defaultValue={data?.fetchUseditem.remarks ?? ""}
            />
          </S.UserInfoBox>
          <S.Errors>{formState.errors.remarks?.message}</S.Errors>
          <S.DivideLineGray></S.DivideLineGray>
          <S.QuillBox>
            <div>상품 설명*</div>
            <ReactQuill
              style={{ height: "200px", width: "600px", marginBottom: "40px" }}
              onChange={onChangeContents}
              // defaultValue={data?.fetchUseditem.contents ?? ""}
              value={contents ? contents : data?.fetchUseditem.contents ?? ""}
            ></ReactQuill>
          </S.QuillBox>
          <S.Errors>{formState.errors.contents?.message}</S.Errors>
          <S.DivideLineGray></S.DivideLineGray>
          <S.AddressBox>
            <p>장소</p>
            {isOpen && (
              <Modal
                open={true}
                onOk={onClickAddress}
                onCancel={onClickAddress}
              >
                <DaumPostcodeEmbed onComplete={onCompleteAddress} />
              </Modal>
            )}
            <S.AddressInfoBox>
              <button type="button" onClick={onClickAddress}>
                주소 검색
              </button>
              <input
                type="text"
                readOnly
                value={
                  address !== ""
                    ? address
                    : data?.fetchUseditem.useditemAddress?.address ?? ""
                }
              />
            </S.AddressInfoBox>
          </S.AddressBox>
          <S.DivideLineGray></S.DivideLineGray>
          <S.ImageBox>
            <div>사진</div>
            {fileUrls.map((el, index) => (
              <UploadBasic
                key={uuidv4()}
                index={index}
                fileUrl={el}
                onChangeFileUrls={onChangeFileUrls}
              />
            ))}
          </S.ImageBox>
          <S.DivideLine></S.DivideLine>
          <S.BtnBox>
            <button>{props.isEdit ? "수정" : "등록"} 하기</button>
          </S.BtnBox>
        </S.Wrapper>
      </S.Container>
    </form>
  );
}
