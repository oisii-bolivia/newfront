"use client";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from "react";
import { AuthValidateError } from "../../validation";

type AuthInputProps = {
  lable: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  authError: AuthValidateError;
};

export const AuthInput: FC<AuthInputProps> = ({
  lable,
  placeholder,
  type,
  value,
  onChange,
  authError,
}) => {
  return (
    <FormControl isInvalid={authError.isError}>
      <FormLabel fontSize={"12px"} fontWeight={500} mb={"2px"}>
        {lable}
      </FormLabel>
      <Input
        value={value}
        variant={"flushed"}
        borderBottom={"2px"}
        borderColor={"primary.200"}
        _focusVisible={{
          borderColor: "primary.400",
        }}
        type={type ?? "text"}
        placeholder={placeholder}
        onChange={onChange}
      />
      {authError.isError && (
        <FormErrorMessage fontSize={"12px"}>
          {authError.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

type AuthPasswordInputProps = {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  authError: AuthValidateError;
};

export const AuthPasswordInput: FC<AuthPasswordInputProps> = ({
  value,
  onChange,
  authError,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={authError.isError}>
      <FormLabel fontSize={"12px"} fontWeight={500} mb={"2px"}>
        パスワード
      </FormLabel>
      <InputGroup>
        <Input
          value={value}
          variant={"flushed"}
          borderBottom={"2px"}
          borderColor={"primary.200"}
          _focusVisible={{
            borderColor: "primary.400",
          }}
          type={show ? "text" : "password"}
          placeholder="パスワードを入力"
          onChange={onChange}
        />
        <InputRightElement>
          <Icon as={show ? EyeOff : Eye} onClick={handleClick} />
        </InputRightElement>
      </InputGroup>
      {authError.isError && (
        <FormErrorMessage fontSize={"12px"}>
          {authError.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
