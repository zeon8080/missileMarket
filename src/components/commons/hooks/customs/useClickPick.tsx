import { useRouter } from "next/router";
import { useMutationPickItem } from "../mutation/useMutationPick";

export const useClickPick = () => {
  const router = useRouter();
  const [toggleUseditemPick] = useMutationPickItem();

  const onClickPick = () => {
    toggleUseditemPick({
      variables: {
        useditemId: String(router.query.useditemId),
      },
    });
  };

  return { onClickPick };
};
