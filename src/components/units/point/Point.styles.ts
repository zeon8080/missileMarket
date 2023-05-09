import styled from "@emotion/styled";

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
`;

export const Title = styled.p`
  margin: 0;
  font-size: 26px;
`;

export const DivideLine = styled.div`
  width: 360px;
  border-bottom: 1px solid #888888;
  margin: 20px 0 40px 0;
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 360px;
  margin-bottom: 20px;

  > span {
    margin-right: 20px;
  }
`;

export const PointBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 360px;

  > input {
    width: 260px;
    height: 38px;
    padding: 0 4px;
  }
  > button {
    border: none;
    width: 80px;
    height: 40px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
  }
`;
