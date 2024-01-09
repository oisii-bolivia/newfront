"use client";

import { FC } from "react";
import { LogoutButton } from "../auth/logout";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/user_atom";

export const HomePage: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);

  return (
    <>
      <p>temp home</p>
      <p>{currentUser?.email}</p>
      <p>{currentUser?.userId}</p>
      <p>{currentUser?.username}</p>
      <LogoutButton />
    </>
  );
};
