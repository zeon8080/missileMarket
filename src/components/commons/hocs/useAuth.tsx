import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const LoginCheck = (): void => {
  const router = useRouter();
  const restoreAccess = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void restoreAccess.toPromise().then((newAccessToken) => {
      if (newAccessToken === undefined) {
        alert("로그인 후에 이용해주세요.");
        void router.push("/login");
      }
    });
  }, []);
};
