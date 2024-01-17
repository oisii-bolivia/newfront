"use client";

import { useWindowSize } from "@/hook/util/use_window_size";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import {
  BOTTOM_VOICE_INPUT_HEIGHT,
  DESK_HEIGHT,
  WINDOW_HEIGHT,
} from "../constants";
import { unitRemover } from "@/util/unit_remover";
import { Message } from "@prisma/client";
import { FC } from "react";
import { TalkContentCard } from "../talk_content_card";

type Props = {
  messages?: Message[];
};

const H = 352 - 51 - unitRemover(BOTTOM_VOICE_INPUT_HEIGHT);

export const TalkBox: FC<Props> = ({ messages }) => {
  const windowSize = useWindowSize();
  const boxHeight =
    windowSize.height - unitRemover(WINDOW_HEIGHT) - unitRemover(DESK_HEIGHT);

  const buildCards = () => {
    if (messages == undefined || messages.length === 0)
      return (
        <Center>
          <Text>まだメッセージはありません</Text>
        </Center>
      );

    return messages.map((message) => (
      <TalkContentCard key={message?.id} content={message?.message} />
    ));
  };

  return (
    <Box
      p={"32px"}
      w={"100%"}
      h={boxHeight}
      bgColor={"primary.200"}
      overflow={"hidden"}
    >
      <Box h={"100%"} borderRadius={"10px"} bgColor={"white"} px={"24px"}>
        <Box
          w={"100%"}
          borderBottomWidth={"1px"}
          borderBottomColor={"primary.200"}
        >
          <Text
            fontSize={"12px"}
            fontWeight={500}
            color={"text-main"}
            py={"16px"}
          >
            花に話しかけてみましょう
          </Text>
        </Box>
        <VStack
          w={"100%"}
          h={H}
          gap={"40px"}
          mt={"24px"}
          pb={"8px"}
          overflowY={"scroll"}
        >
          {buildCards()}
        </VStack>
      </Box>
    </Box>
  );
};
