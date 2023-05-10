import { Tabs } from "antd";
import * as S from "./Mypage.styles";
import SoldItemListPage from "./itemWrited/ItemWrited.index";
import { useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";
import { FETCH_USER } from "../../commons/hooks/query/useQueryUser";
import PickedPage from "./picked/Picked.index";

export default function MyInfoPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER);
  return (
    <S.Container>
      <S.Wrapper>
        <div>{data?.fetchUserLoggedIn.name} 님의 상점</div>
        <S.Style tabPosition={"left"} defaultActiveKey="1">
          <Tabs.TabPane tab={<S.Tab>판매 중인 상품</S.Tab>} key="1">
            <SoldItemListPage />
          </Tabs.TabPane>
          <Tabs.TabPane tab={<S.Tab>구매한 상품</S.Tab>} key="2"></Tabs.TabPane>
          <Tabs.TabPane tab={<S.Tab>찜 목록</S.Tab>} key="3">
            <PickedPage />
          </Tabs.TabPane>
        </S.Style>
      </S.Wrapper>
    </S.Container>
  );
}
