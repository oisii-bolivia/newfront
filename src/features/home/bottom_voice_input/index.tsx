"use client";

import { Box, Icon } from "@chakra-ui/react";
import { Mic, MicOff } from "lucide-react";
import { BOTTOM_VOICE_INPUT_HEIGHT } from "../constants";
import { useTranscriptionRecorder } from "./hook";
import { useEffect } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { transcriptAtom } from "@/store/transcription";
import { axiosClient } from "@/lib/api_client";
import { currentUserAtom } from "@/store/user_atom";

export const BottomVoiceInput = () => {
  const { startRecording, stopRecording, isRecording, text } =
    useTranscriptionRecorder();

  const currentUser = useAtomValue(currentUserAtom);
  const setCurrentTranscription = useSetAtom(transcriptAtom);

  const createNewMessage = async () => {
    await axiosClient.post("/api/openai/chat", {
      message: text,
      userId: currentUser?.userId,
    });
  };

  useEffect(() => {
    if (text == null || text === "") return;
    setCurrentTranscription(text);
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
