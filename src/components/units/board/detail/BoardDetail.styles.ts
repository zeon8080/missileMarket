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
  margin: 40px 0;
`;

export const DivideLineGray = styled.div`
  width: 100%;
  border: 0.5px solid #eeeeee;
  margin: 40px 0;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  > span {
    font-size: 26px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  > span {
    font-size: 14px;
  }
`;

export const ContentsBox = styled.div`
  width: 100%;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  > img {
    width: 400px;
    height: 400px;
    object-fit: contain;
    margin-bottom: 10px;
  }
`;

export const PlayerBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
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
    background-color: #006fff;
    cursor: pointer;
    margin-left: 10px;
  }
`;
