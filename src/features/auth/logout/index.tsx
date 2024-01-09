import { Button } from "@chakra-ui/react";
import { FC } from "react";
import { useLogout } from "./hook";
import { AppAsyncButton } from "@/components/common/app_button/async";

// テスト用
export const LogoutButton: FC = () => {
  const { logout } = useLogout();

  return (
    <AppAsyncButton
      text="ログアウト"
      buttonProps={{ py: "12px", px: "24px" }}
      onClick={logout}
    />
  );
};
