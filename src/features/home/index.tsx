"use client";

import { FC, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { currentUserAtom } from "@/store/user_atom";
import { Box, Spinner, useDisclosure } from "@chakra-ui/react";
import { MenuButton } from "./menu_button";
import { MenuDrawer } from "./menu_drawer";
import { BottomVoiceInput } from "./bottom_voice_input";
import { HomeWindow } from "./window";
import { HomeDesk } from "./desk";
import { TalkBox } from "./talk_box";
import { axiosClient } from "@/lib/api_client";
import { Flower, Message } from "@prisma/client";

export const HomePage: FC = () => {
  const currentUser = useAtomValue(currentUserAtom);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [messages, setMessages] = useState<Message[]>([]);
  const [flower, setFLower] = useState<Flower | null>(null);
  const [isLoading, setIsLaoding] = useState<boolean>(true);

  const getInitMessages = async (userId: string) => {
    const res = await axiosClient.get("/api/message", {
      params: { id: userId },
    });
    const messages = res.data.messages as Message[];
    setMessages(messages);
  };

  const getInitFlower = async (userId: string) => {
    const res = await axiosClient.get("/api/flower", {
      params: { id: userId },
    });
    const flower = res.data.flower;
    setFLower(flower);
  };

  const initLoad = async (userId: string) => {
    try {
      await getInitMessages(userId);
      await getInitFlower(userId);
    } finally {
      setIsLaoding(false);
    }
  };

  const updateMessage = (message: Message) => {
    setMessages((pre) => [...pre, message]);
  };

  const updateFlower = (flower: Flower) => {
    setFLower(flower);
  };

  useEffect(() => {
    if (currentUser?.userId != null) initLoad(currentUser?.userId!);
  }, [currentUser]);

  if (isLoading)
    return (
      <Box w={"100%"} h={"100vh"} display={"grid"} placeItems={"center"}>
        <Spinner color="primary.200" />
      </Box>
    );

  return (
    <Box w={"100%"} h={"100vh"}>
      <HomeWindow />
      <HomeDesk message={messages[messages.length - 1]?.message} />
      <TalkBox messages={messages} />
      <MenuButton onClick={onOpen} />
      <MenuDrawer isOpen={isOpen} onClose={onClose} user={currentUser} />
      <BottomVoiceInput
        onCreateMessage={updateMessage}
        onUpdateFlower={updateFlower}
      />
    </Box>
  );
};
