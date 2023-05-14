import styled from "@emotion/styled";

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

  > span {
    font-size: 50px;
  }
`;

export const UploadFileHidden = styled.input`
  display: none;
`;
