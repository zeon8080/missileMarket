import { LoginCheck } from "../../src/components/commons/hocs/useAuth";
import MyInfoPage from "../../src/components/units/myPage/MyPage";

export default function MyPage() {
  LoginCheck();
  return <MyInfoPage />;
}
