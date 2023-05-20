import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

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

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    overflow: auto;
    margin: 0;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 20px;
    width: 100%;
    overflow: auto;
    margin: 0;
  }
`;

export const ItemBox = styled.div`
  width: 180px;
  height: 260px;
  border: 1px solid #eeeeee;
  cursor: pointer;

  ${mq[1]} {
    width: 100px;
    height: 174px;
  }

  ${mq[0]} {
    width: 100px;
    height: 174px;
  }
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
    object-fit: contain;
  }

  ${mq[1]} {
    width: 100px;
    height: 100px;
  }
  ${mq[0]} {
    width: 100px;
    height: 100px;
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

    ${mq[1]} {
      font-size: 12px;
    }
    ${mq[0]} {
      font-size: 12px;
    }
  }
  ${mq[1]} {
    width: 100px;
  }
  ${mq[0]} {
    width: 100px;
  }
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0 8px;

  ${mq[1]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  > :nth-of-type(1) {
    font-weight: bold;
    ${mq[1]} {
      font-size: 12px;
    }
    ${mq[0]} {
      font-size: 12px;
    }
  }

  > :nth-of-type(2) {
    font-size: 14px;
    color: #888888;
    ${mq[1]} {
      font-size: 10px;
    }
    ${mq[0]} {
      font-size: 10px;
    }
  }
`;
