import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  content: string;
};

export const TalkContentCard: FC<Props> = ({ content }) => {
  return (
    <Box borderWidth={"2px"} borderColor={"primary.200"}>
      <Text my={"12px"} mx={"10px"} fontSize={"12px"} color={"text-main"}>
        {content}
      </Text>
    </Box>
  );
};
