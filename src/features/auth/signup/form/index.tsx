import { VStack } from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { AuthInput, AuthPasswordInput } from "../../components/auth_input";
import { ValidateStatus } from "../hook";

type Props = {
  email: string;
  name: string;
  password: string;
  onChnageEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChnageName: (e: ChangeEvent<HTMLInputElement>) => void;
  onChnagePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  authErrors: ValidateStatus;
};

export const SignupInputGroup: FC<Props> = ({
  email,
  name,
  password,
  onChnageEmail,
  onChnageName,
  onChnagePassword,
  authErrors,
}) => {
  return (
    <VStack gap={"40px"}>
      <AuthInput
        lable="eメール"
        placeholder="youremail@example.com"
        type="email"
        value={email}
        onChange={onChnageEmail}
        authError={authErrors.email}
      />
      <AuthInput
        lable="名前"
        placeholder="あなたの名前"
        value={name}
        onChange={onChnageName}
        authError={authErrors.name}
      />
      <AuthPasswordInput
        value={password}
        onChange={onChnagePassword}
        authError={authErrors.password}
      />
    </VStack>
  );
};
