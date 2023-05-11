import { LoginCheck } from "../../src/components/commons/hocs/useAuth";
import MyInfoPage from "../../src/components/units/myPage/MyPage.index";

export default function MyPage() {
  LoginCheck();
  return <MyInfoPage />;
}
