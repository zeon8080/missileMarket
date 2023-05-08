import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Scroll = styled(InfiniteScroll)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
  width: 1024px;
  margin: 40px 0;
  cursor: pointer;
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

export const ItemBox = styled.div`
  width: 180px;
  height: 260px;
`;

export const ImgBox = styled.div`
  width: 180px;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 180px;
  height: 80px;
  > p {
    font-size: 18px;
    margin: 0 8px;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 8px;

  > :nth-of-type(1) {
    font-weight: bold;
  }

  > :nth-of-type(2) {
    font-size: 14px;
    color: #888888;
  }
`;
