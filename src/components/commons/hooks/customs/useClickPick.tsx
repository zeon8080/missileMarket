import { useRouter } from "next/router";
import { useMutationPickItem } from "../mutation/useMutationPick";
import { FETCH_ITEM } from "../query/useQueryItem";

export const useClickPick = () => {
  const router = useRouter();
  const [toggleUseditemPick] = useMutationPickItem();

  const onClickPick = () => {
    toggleUseditemPick({
      variables: {
        useditemId: String(router.query.itemId),
      },
      refetchQueries: [
        {
          query: FETCH_ITEM,
          variables: { useditemId: router.query.itemId },
        },
      ],
    });
  };

  return { onClickPick };
};
