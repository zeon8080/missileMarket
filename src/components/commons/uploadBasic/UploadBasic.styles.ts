import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const UploadImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 24px;
  cursor: pointer;
  object-fit: contain;
`;

export const UploadButton = styled.button`
  width: 100px;
  height: 100px;
  color: white;
  background-color: #006fff;
  border-radius: 10px;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;

  ${mq[0]} {
    width: 80px;
    height: 80px;
  }
  > span {
    font-size: 50px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
