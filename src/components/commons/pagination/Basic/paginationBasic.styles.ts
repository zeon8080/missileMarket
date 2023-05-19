import styled from "@emotion/styled";
const breakpoints = [500, 768, 1024];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const PageNum = styled.button`
  margin: 20px 10px;
  cursor: pointer;
  border: none;
  background-color: white;
  color: black;
  font-size: 20px;

  ${mq[1]} {
    font-size: 17px;
    margin: 20px 0;
  }

  ${mq[0]} {
    font-size: 10px;
    margin: 20px 0;
  }

  :hover {
    color: #006fff;
  }
`;
