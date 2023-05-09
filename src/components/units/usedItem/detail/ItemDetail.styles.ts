import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #888888;
`;

export const DivideLineGray = styled.div`
  width: 100%;
  border: 1px solid #eeeeee;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  width: 1024px;
  height: 400px;
  margin-bottom: 40px;
`;

export const ImageBox = styled.div`
  width: 400px;
  height: 400px;
  margin-right: 50px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: calc(100%-400px);

  > :nth-of-type(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;
  }

  > :nth-of-type(2) {
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 6px;
  }

  > :nth-of-type(4) {
    height: 200px;
    margin: 20px 0;
  }
`;

export const EditBtnBox = styled.div`
  display: flex;
  flex-direction: row;

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

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  > :nth-of-type(1) {
    border: none;
    width: 140px;
    height: 50px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-left: 10px;
  }

  > :nth-of-type(2) {
    border: none;
    width: 140px;
    height: 50px;
    text-align: center;
    color: white;
    background-color: #006fff;
    cursor: pointer;
    margin-left: 10px;
  }

  > :nth-of-type(3) {
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

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024px;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;

  > :nth-of-type(1) {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6px;
  }

  > :nth-of-type(2) {
    border: 1px solid #888888;
    width: 96%;
  }

  > :nth-of-type(4) {
    height: 100%;
    margin: 20px 0;
    margin-right: 20px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  > img {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin: 20px 20px 20px 0;
  }
`;

export const LocationBox = styled.div`
  > :nth-of-type(1) {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 6px;
  }

  > :nth-of-type(2) {
    border: 1px solid #888888;
    width: 96%;
    margin-bottom: 20px;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-left: 20px;

  > :nth-of-type(1) {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 6px;
  }

  > :nth-of-type(3) {
    margin: 20px 0;
  }

  > :nth-of-type(5) {
    font-weight: bold;
    font-size: 24px;
    margin: 20px 0 6px 0;
  }
`;
