"use client";

import { Box, Icon } from "@chakra-ui/react";
import { Mic, MicOff } from "lucide-react";
import { BOTTOM_VOICE_INPUT_HEIGHT } from "../constants";
import { useTranscriptionRecorder } from "./hook";
import { FC, useEffect } from "react";
import { useAtomValue } from "jotai";
import { axiosClient } from "@/lib/api_client";
import { currentUserAtom } from "@/store/user_atom";
import { Message } from "@prisma/client";

type Props = {
  onCreateMessage: (message: Message) => void;
};

export const BottomVoiceInput: FC<Props> = ({ onCreateMessage }) => {
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

  useEffect(() => {
    if (text == null || text === "") return;
    createNewMessage();
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
