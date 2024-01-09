"use client";

import {
  Button,
  ButtonProps,
  ButtonSpinner,
  Spinner,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { FC, useState } from "react";

type Props = {
  text: string;
  onClick: () => Promise<void>;
  buttonProps?: ButtonProps;
  textProps?: TextProps;
};

export const AppAsyncButton: FC<Props> = ({
  text,
  onClick,
  buttonProps,
  textProps,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAsyncFunc = async () => {
    try {
      setIsLoading(true);
      await onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      borderRadius={"4px"}
      bgColor={"primary.200"}
      h={"auto"}
      isLoading={isLoading}
      {...buttonProps}
      spinner={<Spinner color={"primary.400"} thickness={"2px"} />}
      onClick={handleAsyncFunc}
    >
      <Text fontSize={"14px"} color={"white"} {...textProps}>
        {text}
      </Text>
    </Button>
  );
};
