import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail(): JSX.Element {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    }
  );
  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const onClickMoveEdit = () => {
    router.push(`/boards/${router.query.boardId}/edit`);
  };

  const onClickLike = async () => {
    await likeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };
  const onClickDislike = async () => {
    await dislikeBoard({
      variables: {
        boardId: router.query.boardId,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  };

  const onClickDelete = async () => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });
    alert("삭제되었습니다.");
    router.push("/boards");
  };

  const onClickMoveList = async () => {
    await deleteBoard({
      variables: {
        boardId: String(router.query.boardId),
      },
    });

    router.push("/boards");
  };

  return (
    <BoardDetailUI
      data={data}
      onClickMoveEdit={onClickMoveEdit}
      onClickDelete={onClickDelete}
      onClickMoveList={onClickMoveList}
      onClickLike={onClickLike}
      onClickDislike={onClickDislike}
    />
  );
}
