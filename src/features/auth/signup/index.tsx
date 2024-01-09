"use client";

import { Box, Spacer, useDisclosure } from "@chakra-ui/react";
import { FC, useState } from "react";
import { AuthTitle } from "../components/auth_title";
import { SignupInputGroup } from "./form";
import { AuthButtonGroup } from "../components/auth_button";
import { pagesPath } from "@/lib/$path";
import { AuthConfirmModal } from "./modal";
import { useSignup } from "./hook";

export const SignUpPage: FC = () => {
  const { email, name, password, authValidateError, handler, onSubmit } =
    useSignup();
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(authValidateError);

  const isAllValidated =
    !authValidateError.email.isError &&
    !authValidateError.name.isError &&
    !authValidateError.password.isError;

  return (
    <Box mt={"96px"} mx={"24px"}>
      <AuthTitle text="新規登録" />
      <Spacer h={"48px"} />
      <SignupInputGroup
        email={email}
        name={name}
        password={password}
        onChnageEmail={handler.handleOnChnageEmail}
        onChnageName={handler.handleOnChnageName}
        onChnagePassword={handler.handleOnChnagePassword}
        authErrors={authValidateError}
      />
      <Spacer h={"96px"} />
      <AuthButtonGroup
        firstButtonProps={{
          text: "登録する",
          onClick: isAllValidated ? onOpen : undefined,
          isDisable: !isAllValidated,
        }}
        lastButtonProps={{
          text: "戻る",
          linkProps: { href: pagesPath.top.$url().pathname },
        }}
      />
      <AuthConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        onClickConfirm={onSubmit}
      />
    </Box>
  );
};
