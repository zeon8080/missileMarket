import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1024px;

  > div span {
    font-size: 14px;
    margin-left: 20px;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: 60px;
  object-fit: contain;
`;
