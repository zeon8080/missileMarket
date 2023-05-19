import styled from "@emotion/styled";
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

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  > input {
    width: 600px;
    height: 46px;
    padding: 0 10px;

    ${mq[1]} {
      width: 50%;
    }

    ${mq[0]} {
      width: 50%;
    }
  }

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

export const ListMiddle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  line-height: 60px;
  border: 1px solid #888888;
  margin-bottom: 10px;
  padding: 0 10px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #006fff;
  }
`;

export const ListShort = styled.div`
  width: 15%;
  text-align: center;

  ${mq[1]} {
    width: 20%;
    font-size: 12px;
  }

  ${mq[0]} {
    width: 20%;
    font-size: 12px;
  }
`;

export const ListLong = styled.div`
  width: 70%;
  text-align: center;

  ${mq[1]} {
    width: 60%;
    font-size: 16px;
  }

  ${mq[0]} {
    width: 60%;
    font-size: 16px;
  }
`;

export const ListsFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
