"use client";

import { FC, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/user_atom";
import { Box, useDisclosure } from "@chakra-ui/react";
import { MenuButton } from "./menu_button";
import { MenuDrawer } from "./menu_drawer";
import { BottomVoiceInput } from "./bottom_voice_input";
import { HomeWindow } from "./window";
import { HomeDesk } from "./desk";
import { TalkBox } from "./talk_box";
import { transcriptAtom } from "@/store/transcription";
import { axiosClient } from "@/lib/api_client";
import { Message } from "@prisma/client";

export const HomePage: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const currentTranscription = useAtomValue(transcriptAtom);
  const [messages, setMessages] = useState<Message[]>([]);

  const getMessages = async (userId: string) => {
    const res = await axiosClient.get("/api/message", {
      params: { id: userId },
    });
    const messages = res.data.messages as Message[];
    setMessages(messages);
  };

  useEffect(() => {
    if (currentUser?.userId != null) getMessages(currentUser?.userId!);
  }, [currentUser]);

  return (
    <Box w={"100%"} h={"100vh"}>
      <HomeWindow />
      <HomeDesk message={messages[0].message} />
      <TalkBox messages={messages} />
      <MenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose} user={currentUser} />
      <BottomVoiceInput />
    </Box>
  );
};
