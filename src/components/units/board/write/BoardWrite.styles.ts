import styled from "@emotion/styled";
import { IProps } from "./BoardWrite.types";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

  ${mq[1]} {
    width: 90%;
  }

  ${mq[0]} {
    width: 90%;
  }
`;

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #888888;
  margin: 20px 0 40px 0;

  ${mq[1]} {
    margin: 0 0 20px 0;
  }

  ${mq[0]} {
    margin: 0 0 20px 0;
  }
`;

export const DivideLineGray = styled.div`
  width: 100%;
  border: 0.5px solid #eeeeee;
  margin: 20px 0 40px 0;

  ${mq[1]} {
    margin: 8px 0;
  }

  ${mq[0]} {
    margin: 8px 0;
  }
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
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;

    ${mq[1]} {
      margin-bottom: 4px;
    }

    ${mq[0]} {
      width: 100%;
      margin-bottom: 4px;
    }
  }

  > input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;

    ${mq[1]} {
      width: 100%;
      box-sizing: border-box;
    }

    ${mq[0]} {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
  ${mq[0]} {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;

    ${mq[1]} {
      width: 100%;
      margin-bottom: 4px;
    }

    ${mq[0]} {
      width: 100%;
      margin-bottom: 4px;
    }
  }

  > input {
    width: 814px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;

    ${mq[1]} {
      width: 100%;
      box-sizing: border-box;
    }

    ${mq[0]} {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
  }

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;

    ${mq[1]} {
      margin-bottom: 8px;
    }

    ${mq[0]} {
      margin-bottom: 8px;
    }
  }

  > textarea {
    width: 814px;
    height: 390px;
    font-size: 14px;
    padding: 10px 4px;
    resize: none;

    ${mq[1]} {
      width: 100%;
      height: 140px;
      box-sizing: border-box;
    }

    ${mq[0]} {
      width: 100%;
      height: 140px;
      box-sizing: border-box;
    }
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  > p {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;

    ${mq[1]} {
      width: 100%;
      margin-right: 50px;
    }

    ${mq[0]} {
      width: 100%;
      margin-right: 30px;
    }
  }
`;

export const YoutubeBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  width: 100%;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }
  ${mq[0]} {
    display: flex;
    flex-direction: column;
    margin-bottom: 8px;
  }

  > div {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 18px;

    ${mq[1]} {
      width: 100%;
      margin-bottom: 4px;
    }

    ${mq[0]} {
      width: 100%;
      margin-bottom: 4px;
    }
  }

  > input {
    width: 814px;
    height: 40px;
    font-size: 14px;
    padding: 0 4px;

    ${mq[1]} {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
    }

    ${mq[0]} {
      width: 100%;
      box-sizing: border-box;
      margin-bottom: 10px;
    }
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
