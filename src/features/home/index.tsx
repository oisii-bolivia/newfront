"use client";

import { FC } from "react";
import { LogoutButton } from "../auth/logout";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/user_atom";
import { Box, useDisclosure } from "@chakra-ui/react";
import { MenuButton } from "./menu_button";
import { MenuDrawer } from "./menu_drawer";

export const HomePage: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <MenuButton onClick={onOpen} />
      <p>temp home</p>
      <p>{currentUser?.email}</p>
      <p>{currentUser?.userId}</p>
      <p>{currentUser?.username}</p>
      <LogoutButton />
      <MenuDrawer isOpen={isOpen} onClose={onClose} user={currentUser} />
    </Box>
  );
};
