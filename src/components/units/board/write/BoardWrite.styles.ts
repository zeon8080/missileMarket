import styled from "@emotion/styled";
import { IProps } from "./BoardWrite.types";

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
  width: 1024px;
  margin: 40px 0;
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #888888;
  margin: 20px 0 40px 0;
`;

export const DivideLineGray = styled.div`
  width: 100%;
  border: 0.5px solid #eeeeee;
  margin: 20px 0 40px 0;
`;

export const WrapperTitle = styled.div`
  font-size: 26px;
  margin-bottom: 20px;

  > span {
    font-size: 14px;
    margin-left: 20px;
    color: tomato;
  }
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }

  > input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }

  > input {
    width: 814px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }

  > textarea {
    width: 814px;
    height: 390px;
    font-size: 14px;
    padding: 10px 4px;
    resize: none;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }
`;

export const YoutubeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }

  > input {
    width: 814px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SubmitBtn = styled.button<IProps>`
  border: none;
  width: 140px;
  height: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#006fff" : "")};
`;

export const EditBtn = styled.button`
  border: none;
  width: 140px;
  height: 50px;
  text-align: center;
  color: white;
  cursor: pointer;
  background: #006fff;
`;

export const Errors = styled.div`
  font-size: 10px;
  color: tomato;
`;
