import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  background-color: white;
  position: fixed;
  top: 0;
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
    :hover {
      color: #006fff;
    }
  }
`;

export const Logo = styled.img`
  width: 250px;
  height: 60px;
  object-fit: contain;
  cursor: pointer;
`;
