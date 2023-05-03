import styled from "@emotion/styled";

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
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;

  > input {
    width: 200px;
    height: 40px;
    margin-right: 20px;
    padding: 0 4px;
  }
`;

export const ContentsBox = styled.textarea`
  width: 768px;
  height: 80px;
  resize: none;
  font-size: 14px;
  padding: 4px;
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > span {
    font-size: 14px;
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
