import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #eeeeee;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  z-index: 1;

  ${mq[0]} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;
  padding: 16px 0;
  > div span {
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;

    ${mq[0]} {
      font-size: 12px;
    }
    :hover {
      color: #006fff;
    }
  }

  ${mq[1]} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  ${mq[0]} {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 8px 0 3px 0;
    border-bottom: 1px solid #eeeeee;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;

  > p {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    :hover {
      color: #006fff;
    }

    ${mq[0]} {
      padding: 5px;
      font-size: 14px;
    }
  }

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    justify-content: space-between;
  }
  ${mq[0]} {
    position: absolute;
    top: 50%;
    padding: 0;
    margin: 0;
  }
`;

export const LogoutMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 130px;
  margin-right: 110px;

  > p {
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    :hover {
      color: #006fff;
    }

    ${mq[0]} {
      padding: 5px;
      font-size: 14px;
    }
  }

  ${mq[1]} {
    display: flex;
    flex-direction: row;
    padding-left: 100px;
    justify-content: space-between;
  }

  ${mq[0]} {
    position: absolute;
    top: 50%;
    padding: 0;
    margin: 0;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;

  ${mq[1]} {
    width: 150px;
    height: 40px;
  }
`;
