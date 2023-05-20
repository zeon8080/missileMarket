import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 512px;
  border: 1px solid #888888;
  padding: 40px 0;

  ${mq[0]} {
    width: 90%;
  }
`;

export const Title = styled.p`
  font-size: 26px;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > input {
    width: 360px;
    height: 40px;
    padding: 0 4px;

    ${mq[0]} {
      width: 100%;
    }
  }

  > p {
    color: tomato;
    font-size: 12px;
    margin: 2px 0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    border: none;
    width: 100px;
    height: 40px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-bottom: 20px;
  }

  > div span {
    color: #999999;
    font-size: 14px;
    margin-right: 10px;

    + button {
      all: unset;
      border-bottom: 1px solid #999999;
      font-size: 16px;
      cursor: pointer;

      :hover {
        color: #006fff;
      }
    }
  }
`;
