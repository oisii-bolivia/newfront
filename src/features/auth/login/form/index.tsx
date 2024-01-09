import { VStack } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { AuthInput, AuthPasswordInput } from "../../components/auth_input";
import { LoginValidateStatus } from "../hook";

type Props = {
  email: string;
  password: string;
  onChnageEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChnagePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  authErrors: LoginValidateStatus;
};

export const LoginInputGroup: FC<Props> = ({
  email,
  password,
  onChnageEmail,
  onChnagePassword,
  authErrors,
}) => {
  return (
    <VStack gap={"40px"}>
      <AuthInput
        lable="eメール"
        placeholder="youremail@example.com"
        value={email}
        onChange={onChnageEmail}
        authError={authErrors.email}
      />
      <AuthPasswordInput
        value={password}
        onChange={onChnagePassword}
        authError={authErrors.password}
      />
    </VStack>
  );
};
