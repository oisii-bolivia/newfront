import { AppButton, ButtonLinkProps } from "@/components/common/app_button";
import { AppAsyncButton } from "@/components/common/app_button/async";
import { VStack } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  firstButtonProps: {
    text: string;
    linkProps?: ButtonLinkProps;
    async?: {
      isAsync: boolean;
      onClick?: () => Promise<void>;
    };
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
      {firstButtonProps.async?.isAsync ? (
        <AppAsyncButton
          text={firstButtonProps.text}
          onClick={firstButtonProps.async?.onClick!}
          buttonProps={{
            w: "180px",
            isDisabled: firstButtonProps.isDisable,
          }}
          textProps={{ py: "14px" }}
        />
      ) : (
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
      )}
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
