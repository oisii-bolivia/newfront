import { AppButton, ButtonLinkProps } from "@/components/common/app_button";
import { VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  firstButtonProps: {
    text: string;
    linkProps?: ButtonLinkProps;
    isDisable?: boolean;
    onClick?: () => void;
  };
  lastButtonProps: {
    text: string;
    linkProps?: ButtonLinkProps;
    isDisable?: boolean;
    onClick?: () => void;
  };
};

export const AuthButtonGroup: FC<Props> = ({
  firstButtonProps,
  lastButtonProps,
}) => {
  return (
    <VStack gap={"22px"}>
      <AppButton
        text={firstButtonProps.text}
        linkProps={firstButtonProps.linkProps}
        buttonProps={{
          w: "180px",
          onClick: firstButtonProps.onClick,
          isDisabled: firstButtonProps.isDisable,
        }}
        textProps={{ py: "14px" }}
      />
      <AppButton
        text={lastButtonProps.text}
        linkProps={lastButtonProps.linkProps}
        buttonProps={{
          w: "180px",
          bgColor: "transparent",
          border: "2px",
          borderColor: "primary.200",
          onClick: lastButtonProps.onClick,
          isDisabled: lastButtonProps.isDisable,
        }}
        textProps={{ py: "14px", color: "primary.200" }}
      />
    </VStack>
  );
};
