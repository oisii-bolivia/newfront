import { Button, ButtonProps, Text, TextProps } from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";
import { Url } from "url";

export type ButtonLinkProps = {
  href: Url | string;
  passHref?: boolean;
};

type Props = {
  text: string;
  linkProps?: ButtonLinkProps;
  buttonProps?: ButtonProps;
  textProps?: TextProps;
};

export const AppButton: FC<Props> = ({
  text,
  linkProps,
  buttonProps,
  textProps,
}) => {
  if (linkProps != null && linkProps.href != null)
    return (
      <NextLink href={linkProps.href} passHref={linkProps.passHref}>
        <Button
          borderRadius={"4px"}
          bgColor={"primary.200"}
          h={"auto"}
          {...buttonProps}
        >
          <Text fontSize={"14px"} color={"white"} {...textProps}>
            {text}
          </Text>
        </Button>
      </NextLink>
    );

  return (
    <Button
      borderRadius={"4px"}
      bgColor={"primary.200"}
      h={"auto"}
      {...buttonProps}
    >
      <Text fontSize={"14px"} color={"white"} {...textProps}>
        {text}
      </Text>
    </Button>
  );
};
