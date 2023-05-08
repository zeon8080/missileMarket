import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  > textarea {
    width: 98%;
    height: 80px;
    text-align: left;
    resize: none;
  }

  > button {
    font-size: 12px;
    border: none;
    width: 50px;
    height: 30px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-left: 10px;
  }
`;
