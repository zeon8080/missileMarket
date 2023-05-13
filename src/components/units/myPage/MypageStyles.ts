import styled from "@emotion/styled";
import { Tabs } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1024px;
  margin: 40px 0;

  > :nth-of-type(1) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;

export const Style = styled(Tabs)`
  margin-top: 40px;
  color: #888888;
`;
export const Tab = styled.div`
  line-height: 80px;
  width: 200px;
  font-size: 18px;
`;
