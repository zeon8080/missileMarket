import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .max(10, "10글자 이내로 적어주세요")
    .required("상품명을 입력해주세요."),

  price: yup.string().required("가격을 입력해주세요."),

  remarks: yup.string().required("상품에 대해 요약해주세요."),

  contents: yup.string().required("상품에 대해 설명해주세요."),
});
