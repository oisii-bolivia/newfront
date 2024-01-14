"use client";

import { FC } from "react";
import { LogoutButton } from "../auth/logout";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/user_atom";
import { Box, useDisclosure } from "@chakra-ui/react";
import { MenuButton } from "./menu_button";
import { MenuDrawer } from "./menu_drawer";
import { BottomVoiceInput } from "./bottom_voice_input";
import { HomeWindow } from "./window";
import { HomeDesk } from "./desk";
import { TalkBox } from "./talk_box";

export const HomePage: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box w={"100%"} h={"100vh"}>
      <HomeWindow />
      <HomeDesk />
      <TalkBox />
      <MenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose} user={currentUser} />
      <BottomVoiceInput />
    </Box>
  );
};
