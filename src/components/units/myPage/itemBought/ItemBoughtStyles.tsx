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
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
  margin: 40px 0;
`;

export const ItemBox = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid #eeeeee;
  cursor: pointer;
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
