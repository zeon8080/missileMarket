import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import CommentsList from "../../../src/components/units/boardComments/commentsList/CommentsList.container";
import CommentsWrite from "../../../src/components/units/boardComments/commentsWrite/CommentsWrite.container";

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentsWrite />
      <CommentsList />
    </>
  );
}
