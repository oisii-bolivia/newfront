import { Box, Image } from "@chakra-ui/react";
import { DESK_HEIGHT } from "../constants";
import { FC } from "react";
import { TalkContentCard } from "../talk_content_card";

type Props = {
  message?: string;
};

export const HomeDesk: FC<Props> = ({ message }) => {
  return (
    <Box pos={"relative"} w={"100%"} h={DESK_HEIGHT}>
      <Image
        pos={"absolute"}
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
        src="images/desk.png"
        alt="机"
      />
      <Box
        pos={"absolute"}
        bottom={"92px"}
        left={"50%"}
        transform={"translateX(-50%)"}
      >
        <Image src="images/flower-4.svg" alt={"花"} />
      </Box>
      {message && (
        <TalkContentCard
          pos={"absolute"}
          w={"76%"}
          bottom={"8px"}
          left={"50%"}
          transform={"translateX(-50%)"}
          content={message}
        />
      )}
    </Box>
  );
};
