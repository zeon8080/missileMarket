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

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;

  > input {
    width: 600px;
    height: 40px;
    padding: 0 10px;
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
  border: 1px solid black;
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
`;

export const ListLong = styled.div`
  width: 70%;
  text-align: center;
`;

export const ListsFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
