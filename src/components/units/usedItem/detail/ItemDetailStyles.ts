import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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
  justify-content: center;
  width: 1024px;
  height: 400px;
  margin-bottom: 40px;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
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

  ${mq[1]} {
    width: 400px;
    height: 400px;
    margin: 0 0 20px 0;
  }
  ${mq[0]} {
    width: 320px;
    height: 320px;
    margin: 0 0 20px 0;
  }
`;

export const TopBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 490px;

  ${mq[1]} {
    width: 100%;
    display: flex;
    flex: content;
    justify-content: center;
    align-items: center;
  }

  ${mq[0]} {
    width: 100%;
    display: flex;
    flex: content;
    justify-content: center;
    align-items: center;
  }

  > :nth-of-type(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 30px;

    ${mq[1]} {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid #eeeeee;
    }

    ${mq[0]} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100px;
      border-bottom: 1px solid #eeeeee;
    }
  }

  > :nth-of-type(2) {
    font-weight: bold;
    font-size: 26px;
    margin-bottom: 6px;
  }

  > :nth-of-type(3) {
    ${mq[1]} {
      display: none;
    }
    ${mq[0]} {
      display: none;
    }
  }

  > :nth-of-type(4) {
    height: 100%;
    margin: 20px 0;
    word-break: break-all;

    ${mq[1]} {
      width: 80%;
    }

    ${mq[0]} {
      width: 320px;
    }
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
    margin-left: 4px;
  }

  ${mq[0]} {
    margin-top: 10px;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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

    ${mq[1]} {
      width: 120px;
    }

    ${mq[0]} {
      width: 100px;
    }
  }

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
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

    ${mq[1]} {
      width: 120px;
    }
    ${mq[0]} {
      width: 100px;
    }
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 1024px;

  ${mq[1]} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${mq[0]} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
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

    ${mq[1]} {
      height: 40px;
      border-bottom: 1px solid #eeeeee;
    }

    ${mq[0]} {
      height: 40px;
      border-bottom: 1px solid #eeeeee;
    }
  }

  ${mq[0]} {
    width: 320px;
  }

  > :nth-of-type(2) {
    border: 1px solid #888888;
    width: 96%;

    ${mq[1]} {
      display: none;
    }

    ${mq[0]} {
      display: none;
    }
  }

  > :nth-of-type(4) {
    height: 100%;
    margin: 20px 0;
    margin-right: 20px;
  }

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    ${mq[1]} {
      margin: 0 0 10px 0;
    }

    ${mq[0]} {
      margin: 0 0 10px 0;
    }
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentsBox = styled.div`
  width: 96%;
  word-break: break-all;

  ${mq[1]} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${mq[0]} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LocationBox = styled.div`
  margin-bottom: 100px;

  > :nth-of-type(1) {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 6px;
  }

  > :nth-of-type(2) {
    border: 1px solid #888888;
    width: 96%;
    margin-bottom: 20px;

    ${mq[1]} {
      width: 100%;
    }

    ${mq[0]} {
      width: 100%;
    }
  }

  > :nth-of-type(3) {
    ${mq[1]} {
      width: 100%;
    }
    ${mq[0]} {
      width: 100%;
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-left: 20px;

  ${mq[1]} {
    padding: 0;
  }

  ${mq[0]} {
    padding: 0;
  }

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

  ${mq[1]} {
    width: 80%;
  }

  ${mq[0]} {
    width: 80%;
  }
`;
