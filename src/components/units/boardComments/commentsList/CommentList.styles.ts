import styled from "@emotion/styled";
import { Modal } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 768px;

  border-bottom: 1px solid #eeeeee;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  > div {
    width: 398px;
    height: 40px;
  }

  > span {
    font-size: 14px;
    color: #888888;
  }
`;

export const Contents = styled.div`
  width: 480px;
  height: 80px;
  font-size: 14px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 480px;
  margin-bottom: 20px;

  > button {
    border: none;
    width: 60px;
    height: 30px;
    font-size: 14px;
    margin-left: 6px;
    text-align: center;
    color: white;
    background: #006fff;
    cursor: pointer;
  }
`;

export const PasswordModal = styled(Modal)``;

export const PasswordInput = styled.input`
  width: 60%;
  height: 40px;
  margin-top: 10px;
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #888888;
  margin: 40px 0;
`;
