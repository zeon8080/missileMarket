import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const isEditState = atom({
  key: "isEditState",
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

export const recoilFileUrls = atom({
  key: "recoilFileUrls",
  default: ["", "", ""],
});

export const recoilAddress = atom({
  key: "recoilAddress",
  default: "",
});
