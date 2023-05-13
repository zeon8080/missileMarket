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
    width: 480px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;
  }
`;

export const QuillBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > :nth-of-type(1) {
    font-size: 18px;
    margin-right: 128px;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  > p {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;
  }
`;

export const AddressInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > button {
    font-size: 14px;
    border: none;
    width: 80px;
    height: 46px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-right: 10px;
  }
  > input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    padding-right: 10px;
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

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > button {
    border: none;
    width: 140px;
    height: 50px;
    text-align: center;
    color: white;
    cursor: pointer;
    background: #006fff;
  }
`;

export const Errors = styled.div`
  font-size: 10px;
  color: tomato;
`;
