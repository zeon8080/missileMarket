import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardDetailUI {
  data?: Pick<IQuery, "fetchBoard">;
  onClickMoveEdit: () => void;
  onClickDelete: () => Promise<void>;
  onClickMoveList: () => Promise<void>;
  onClickLike: () => Promise<void>;
  onClickDislike: () => Promise<void>;
}
