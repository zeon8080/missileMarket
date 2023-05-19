import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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
  align-items: flex-start;
  width: 768px;

  ${mq[1]} {
    width: 90%;
  }

  ${mq[0]} {
    width: 90%;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;

  > input {
    width: 200px;
    height: 40px;
    margin-right: 20px;
    padding: 0 4px;

    ${mq[1]} {
      width: 44%;
      margin: 0;
    }

    ${mq[0]} {
      width: 44%;
      margin: 0;
    }
  }

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentsBox = styled.textarea`
  width: 768px;
  height: 80px;
  resize: none;
  font-size: 14px;
  padding: 4px;

  ${mq[1]} {
    width: 100%;
    box-sizing: border-box;
  }

  ${mq[0]} {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  > span {
    font-size: 14px;

    ${mq[1]} {
      display: none;
    }

    ${mq[0]} {
      display: none;
    }
  }

  > button {
    border: none;
    width: 100px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: white;
    background-color: #006fff;
    cursor: pointer;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
  margin: 40px 0;
`;
