import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

  ${mq[1]} {
    width: 90%;
  }

  ${mq[0]} {
    width: 90%;
  }
`;

export const DivideLineGray = styled.div`
  width: 480px;
  border: 0.5px solid #eeeeee;
  margin: 0 0 20px 0;

  ${mq[1]} {
    width: 100%;
  }

  ${mq[0]} {
    width: 100%;
  }
`;
export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 480px;

  ${mq[1]} {
    width: 100%;
  }

  ${mq[0]} {
    width: 100%;
  }

  > div {
    width: 398px;
    height: 40px;

    ${mq[1]} {
      width: 100%;
    }

    ${mq[0]} {
      width: 100%;
    }
  }

  > span {
    font-size: 14px;
    color: #888888;

    ${mq[1]} {
      width: 30%;
      font-size: 12px;
    }

    ${mq[0]} {
      width: 30%;
      font-size: 12px;
    }
  }
`;

export const Contents = styled.div`
  width: 480px;
  height: 80px;
  font-size: 14px;

  ${mq[1]} {
    width: 100%;
  }

  ${mq[0]} {
    width: 100%;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 480px;
  margin-bottom: 20px;
  ${mq[1]} {
    width: 100%;
  }

  ${mq[0]} {
    width: 100%;
  }

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
