import { Box, BoxProps, PositionProps, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = BoxProps & {
  content: string;
};

export const TalkContentCard: FC<Props> = ({ content, ...styles }) => {
  return (
    <Box
      {...styles}
      borderRadius={"10px"}
      borderWidth={"4px"}
      borderColor={"primary.200"}
      bgColor={"white"}
    >
      <Text my={"12px"} mx={"10px"} fontSize={"12px"} color={"text-main"}>
        {content}
      </Text>
    </Box>
  );
};
