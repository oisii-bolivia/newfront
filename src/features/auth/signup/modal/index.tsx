import { AppButton } from "@/components/common/app_button";
import { AppAsyncButton } from "@/components/common/app_button/async";
import { AppModal } from "@/components/share/modal";
import { Spacer, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickConfirm: () => Promise<void>;
};

export const AuthConfirmModal: FC<Props> = ({
  isOpen,
  onClose,
  onClickConfirm,
}) => {
  const content = <Text>こちらの内容で登録しますか？</Text>;

  const footer = (
    <>
      <AppAsyncButton
        text="登録する"
        onClick={onClickConfirm}
        buttonProps={{ px: "24px", py: "12px", mr: "8px" }}
      />
      <AppButton
        text="戻る"
        buttonProps={{ onClick: onClose, px: "24px", py: "12px" }}
      />
    </>
  );

  return (
    <AppModal
      isOpen={isOpen}
      onClose={onClose}
      title="登録の確認"
      content={content}
      footer={footer}
    />
  );
};
