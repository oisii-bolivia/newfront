import { Box, Flex, Image } from "@chakra-ui/react";
import { WINDOW_HEIGHT } from "../constants";

export const HomeWindow = () => {
  return (
    <Box w={"100%"} h={WINDOW_HEIGHT} bgColor={"secondary.200"}>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image src="images/curtain_left.png" alt="左カーテン" />
        <Window />
        <Image src="images/curtain_right.png" alt="右カーテン" />
      </Flex>
    </Box>
  );
};

const Window = () => {
  const buildFlame = () => {
    return (
      <Flex h={"50%"}>
        <Box
          flex={1}
          borderColor={"rgba(0, 0, 0, 0.2)"}
          borderWidth={"1px"}
          bgColor={"white"}
        />
        <Box
          flex={1}
          borderColor={"rgba(0, 0, 0, 0.2)"}
          borderWidth={"1px"}
          bgColor={"white"}
        />
      </Flex>
    );
  };

  return (
    <Flex
      w={"110px"}
      h={"92px"}
      flexDir={"column"}
      borderColor={"rgba(0, 0, 0, 0.2)"}
      borderWidth={"1px"}
    >
      {buildFlame()}
      {buildFlame()}
    </Flex>
  );
};
