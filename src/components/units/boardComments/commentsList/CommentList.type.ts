import {
  IBoardComment,
  IQuery,
} from "../../../../commons/types/generated/types";

export interface ICommentsListUIProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onLoadMore: () => void;
}

export interface ICommentsListUIItemProps {
  el: IBoardComment;
}
