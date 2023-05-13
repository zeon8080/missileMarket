import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  border-bottom: 2px solid #eeeeee;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;

  > :nth-of-type(2) {
    margin: 6px 0;
    word-break: break-all;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 6px;

  > :nth-of-type(1) {
    font-size: 18px;
    font-weight: bold;
  }
  > :nth-of-type(2) {
    font-size: 14px;
    color: #888888;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  > button {
    font-size: 12px;
    border: none;
    width: 50px;
    height: 30px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-left: 6px;
  }
`;

export const Text = styled.textarea`
  width: 100%;
  resize: none;
`;
