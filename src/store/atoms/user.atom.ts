import { atom } from "recoil";
import { Usertype } from "@/ts/types";

export const userState = atom({
  key: "user",
  default: null as Usertype | null,
});
