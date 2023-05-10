import styled from "@emotion/styled";

export const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  margin: 10px 0;
`;

export const Page = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #888888;
  margin: 10px 0 8px 0;
  cursor: pointer;

  :hover {
    color: black;
    font-weight: bold;
  }
`;

export const PickBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 8px 0;
  cursor: pointer;

  > :nth-of-type(1) {
    font-size: 12px;
    font-weight: 500;
    color: #888888;
    margin: 10px 0 8px 0;
    :hover {
      color: black;
      font-weight: bold;
    }
  }
`;

export const Picked = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  > span {
    font-size: 16px;
    margin-left: 20px;
    line-height: 20px;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: 1px solid #dddddd;
  width: 60px;
  height: 60px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* cursor: pointer; */
  }
`;

export const Heart = styled.div`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 6px;
    width: 10px;
    height: 16px;
    background-color: red;
    border-radius: 10px 10px 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: -3px;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`;

export const Box = styled.div`
  position: fixed;
  z-index: 1;
  right: 90px;
  top: 110px;
  width: 90px;
  background-color: white;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivideLine = styled.div`
  background-color: red;
  width: 60px;
  border-bottom: 1px solid black;
`;
