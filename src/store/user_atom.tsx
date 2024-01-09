"use client";

import { atom, useSetAtom } from "jotai";
import { User } from "lucia";
import { FC, useEffect } from "react";

export const currentUserAtom = atom<User | null>(null);

type Props = {
  user: User;
};

export const UserProvider: FC<Props> = ({ user }) => {
  const setCurrentUser = useSetAtom(currentUserAtom);

  useEffect(() => {
    if (user == null) setCurrentUser(null);
    if (user != null) setCurrentUser(user);
  }, []);

  return <></>;
};
