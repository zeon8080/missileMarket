import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../../commons/types/generated/types";
import { CREATE_POINT } from "../mutation/useMutationPoint";
import { useRouter } from "next/router";
import { Modal } from "antd";
declare const window: typeof globalThis & {
  IMP: any;
};

export interface IPointForm {
  point: string;
}

export const useClickPoint = () => {
  const router = useRouter();
  const [createPointTransactionOfLoading] = useMutation<
    Pick<IMutation, "createPointTransactionOfLoading">,
    IMutationCreatePointTransactionOfLoadingArgs
  >(CREATE_POINT);

  const onClickCharge = async (Uid: string) => {
    await createPointTransactionOfLoading({
      variables: {
        impUid: Uid,
      },
    });
  };

  const onClickKakaoCharge = (point: IPointForm): void => {
    const IMP = window.IMP;
    IMP.init("imp49910675");

    IMP.request_pay(
      {
        pg: "kakaopay",
        pay_method: "card",
        name: "충전",
        amount: point.point,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
      },
      (rsp: any) => {
        if (rsp.success === true) {
          onClickCharge(rsp.imp_uid);
          Modal.success({ content: "충전되었습니다." });
          router.push("/items");
        } else {
          Modal.error({ content: "충전에 실패하였습니다." });
        }
      }
    );
  };

  return { onClickKakaoCharge };
};
