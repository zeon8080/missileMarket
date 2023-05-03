import InfiniteScroll from "react-infinite-scroller";
import { ICommentsListUIProps } from "./CommentList.type";
import CommentsListUIItem from "./CommentsList.presenterItem";

export default function CommentsListUI(
  props: ICommentsListUIProps
): JSX.Element {
  return (
    <div style={{ height: "800px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchBoardComments.map((el) => (
          <CommentsListUIItem key={el._id} el={el} />
        )) ?? <></>}
      </InfiniteScroll>
    </div>
  );
}
