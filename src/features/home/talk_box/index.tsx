"use client";

import { useWindowSize } from "@/hook/util/use_window_size";
import { Box, Text } from "@chakra-ui/react";
import { DESK_HEIGHT, WINDOW_HEIGHT } from "../constants";
import { unitRemover } from "@/util/unit_remover";

export const TalkBox = () => {
  const windowSize = useWindowSize();

  const boxHeight =
    windowSize.height - unitRemover(WINDOW_HEIGHT) - unitRemover(DESK_HEIGHT);

  return (
    <Box p={"32px"} w={"100%"} h={boxHeight} bgColor={"primary.200"}>
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
      </Box>
    </Box>
  );
};
