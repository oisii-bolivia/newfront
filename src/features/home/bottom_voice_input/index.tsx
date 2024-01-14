import { Box, Icon } from "@chakra-ui/react";
import { Mic } from "lucide-react";
import { BOTTOM_VOICE_INPUT_HEIGHT } from "../constants";

export const BottomVoiceInput = () => {
  return (
    <Box
      position={"absolute"}
      bottom={0}
      w={"100%"}
      h={BOTTOM_VOICE_INPUT_HEIGHT}
      display={"grid"}
      placeItems={"center"}
      bgColor={"secondary.200"}
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
        <Icon as={Mic} color={"white"} w={"24px"} h={"24px"} />
      </Box>
    </Box>
  );
};
