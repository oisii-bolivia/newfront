"use client";

import { Box, Icon } from "@chakra-ui/react";
import { Mic, MicOff } from "lucide-react";
import { BOTTOM_VOICE_INPUT_HEIGHT } from "../constants";
import { useTranscriptionRecorder } from "./hook";
import { FC, useEffect, useState } from "react";
import { useAtomValue } from "jotai";
import { axiosClient } from "@/lib/api_client";
import { currentUserAtom } from "@/store/user_atom";
import { Flower, Message } from "@prisma/client";

type Props = {
  onCreateMessage: (message: Message) => void;
  onUpdateFlower: (flower: Flower) => void;
};

export const BottomVoiceInput: FC<Props> = ({
  onCreateMessage,
  onUpdateFlower,
}) => {
  const { startRecording, stopRecording, isRecording, text } =
    useTranscriptionRecorder();

  const currentUser = useAtomValue(currentUserAtom);

  const createNewMessage = async () => {
    const res = await axiosClient.post("/api/openai/chat", {
      message: text,
      userId: currentUser?.userId,
    });
    const msg = res.data.message as Message;

    onCreateMessage(msg);
  };

  const updateCount = async () => {
    const res = await axiosClient.post("/api/flower", {
      userId: currentUser?.userId,
    });
    const flower = res.data.flower as Flower;
    onUpdateFlower(flower);
  };

  const handleOnCreateMessage = async () => {
    await createNewMessage();
    await updateCount();
  };

  useEffect(() => {
    if (text == null || text === "") return;
    handleOnCreateMessage();
  }, [text]);

  return (
    <Box
      position={"absolute"}
      bottom={0}
      w={"100%"}
      h={BOTTOM_VOICE_INPUT_HEIGHT}
      display={"grid"}
      placeItems={"center"}
      bgColor={"secondary.200"}
      onClick={isRecording ? stopRecording : startRecording}
    >
      <Box
        display={"grid"}
        placeItems={"center"}
        w={"60px"}
        h={"60px"}
        borderColor={"white"}
        borderWidth={"4px"}
        borderRadius={"9999px"}
      >
        <Icon
          as={isRecording ? MicOff : Mic}
          color={"white"}
          w={"24px"}
          h={"24px"}
        />
      </Box>
    </Box>
  );
};
