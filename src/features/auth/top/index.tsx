import { pagesPath } from "@/lib/$path";
import { Box, Center } from "@chakra-ui/react";
import { FC } from "react";
import { AuthButtonGroup } from "../components/auth_button";

export const AuthTopPage: FC = () => {
  return (
    <Box>
      <Center mt={"118px"} mb={"236"}>
        <Box
          w={"120px"}
          h={"120px"}
          display={"grid"}
          placeItems={"center"}
          bgColor={"gray"}
        >
          logo
        </Box>
      </Center>
      <AuthButtonGroup
        firstButtonProps={{
          text: "新規登録",
          linkProps: { href: pagesPath.signup.$url().pathname },
        }}
        lastButtonProps={{
          text: "ログイン",
          linkProps: { href: pagesPath.login.$url().pathname },
        }}
      />
    </Box>
  );
};
