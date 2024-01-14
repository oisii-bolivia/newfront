import { Box, Image } from "@chakra-ui/react";
import { DESK_HEIGHT } from "../constants";

export const HomeDesk = () => {
  return (
    <Box pos={"relative"} w={"100%"} h={DESK_HEIGHT}>
      <Box
        pos={"absolute"}
        bottom={"92px"}
        left={"50%"}
        transform={"translateX(-50%)"}
      >
        <Image src="images/flower.svg" alt={"花"} />
      </Box>
      <Image w={"100%"} objectFit={"cover"} src="images/desk.png" alt="机" />
    </Box>
  );
};
