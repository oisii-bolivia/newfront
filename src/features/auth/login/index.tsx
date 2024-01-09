"use client";

import { Box, Spacer, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { AuthTitle } from "../components/auth_title";
import { AuthButtonGroup } from "../components/auth_button";
import { pagesPath } from "@/lib/$path";
import { LoginInputGroup } from "./form";
import { useLogin } from "./hook";

// あとで消せ
function request1(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      console.log("resolved");
    }, 1000);
  });
}

export const LoginPage: FC = () => {
  const { email, password, handler, authValidateError, onLogin } = useLogin();

  return (
    <Box mt={"96px"} mx={"24px"}>
      <AuthTitle text="ログイン" />
      <Spacer h={"48px"} />
      <LoginInputGroup
        email={email}
        password={password}
        onChnageEmail={handler.handleOnChnageEmail}
        onChnagePassword={handler.handleOnChnagePassword}
        authErrors={authValidateError}
      />
      <Spacer h={"96px"} />
      <AuthButtonGroup
        firstButtonProps={{
          text: "登録する",
        }}
        lastButtonProps={{
          text: "戻る",
          linkProps: { href: pagesPath.top.$url().pathname },
        }}
      />
    </Box>
  );
};
