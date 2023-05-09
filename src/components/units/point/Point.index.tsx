import { useQuery } from "@apollo/client";
import * as S from "./Point.styles";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER } from "../../commons/hooks/query/useQueryUser";
import { LoginCheck } from "../../commons/hocs/useAuth";
import { useForm } from "react-hook-form";
import {
  IPointForm,
  useClickPoint,
} from "../../commons/hooks/customs/useClickPoint";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  const { register, handleSubmit } = useForm<IPointForm>({ mode: "onChange" });
  const { onClickKakaoCharge } = useClickPoint();

  LoginCheck();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>결제</S.Title>
        <S.DivideLine></S.DivideLine>
        <S.UserBox>
          <span>잔여 포인트 :</span>
          <span>{data?.fetchUserLoggedIn.userPoint?.amount} P</span>
        </S.UserBox>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
        <form onSubmit={handleSubmit(onClickKakaoCharge)}>
          <S.PointBox>
            <input
              type="text"
              placeholder="충전할 포인트 입력"
              {...register("point")}
            />
            <button>충전</button>
          </S.PointBox>
        </form>
      </S.Wrapper>
    </S.Container>
  );
}
