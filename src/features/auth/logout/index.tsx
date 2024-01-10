import { Button, Icon } from "@chakra-ui/react";
import { FC } from "react";
import { useLogout } from "./hook";
import { AppAsyncButton } from "@/components/common/app_button/async";
import { LogOut } from "lucide-react";

// テスト用
export const LogoutButton: FC = () => {
  const { logout } = useLogout();

  return (
    <AppAsyncButton
      text="ログアウト"
      buttonProps={{
        px: 0,
        leftIcon: <Icon as={LogOut} color={"white"} />,
        bgColor: "transparent",
      }}
      onClick={logout}
    />
  );
};
