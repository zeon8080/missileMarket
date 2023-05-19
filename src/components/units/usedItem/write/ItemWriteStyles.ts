import styled from "@emotion/styled";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
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
    width: 480px;
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

export const QuillBox = styled.div`
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

  > :nth-of-type(1) {
    font-size: 18px;
    margin-right: 128px;

    ${mq[1]} {
      margin-bottom: 8px;
    }

    ${mq[0]} {
      margin-bottom: 8px;
    }
  }
`;

export const Quill = styled(ReactQuill)`
  width: 600px;
  height: 200px;
  margin-bottom: 40px;

  ${mq[1]} {
    width: 100%;
    height: 140px;
  }

  ${mq[0]} {
    width: 100%;
    height: 140px;
  }
`;

export const AddressBox = styled.div`
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

  > p {
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
`;

export const AddressInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

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

    ${mq[1]} {
      margin-bottom: 8px;
    }

    ${mq[0]} {
      margin-bottom: 8px;
    }
  }
  > input {
    width: 280px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    padding-right: 10px;

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

export const ImageBox = styled.div`
  display: flex;
  flex-direction: row;
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
