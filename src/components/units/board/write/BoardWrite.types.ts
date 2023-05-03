import type { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWrite {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IBoardWriteUI {
  changeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  changePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  changeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  changeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeYoutubeUrl: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickEdit: () => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  writerErr: string;
  passwordErr: string;
  titleErr: string;
  contentsErr: string;
  isOpen: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  isActive: boolean;
  fileUrls: string[];
}

export interface IProps {
  isActive: boolean;
}
