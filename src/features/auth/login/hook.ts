import { ChangeEvent, useState } from "react";
import { AuthValidateError, authValidator } from "../validation";

export type LoginValidateStatus = {
  email: AuthValidateError;
  password: AuthValidateError;
};

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authValidateError, setAuthValidateError] =
    useState<LoginValidateStatus>({
      email: { isError: false },
      password: { isError: false },
    });

  const handleOnChnageEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailValidateResult = authValidator.emailVatidator(e.target.value);
    setAuthValidateError((pre) => ({ ...pre, email: emailValidateResult }));
  };

  const handleOnChnagePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const passwordValidateResult = authValidator.passwordValidator(
      e.target.value
    );
    setAuthValidateError((pre) => ({
      ...pre,
      password: passwordValidateResult,
    }));
  };

  const handler = {
    handleOnChnageEmail,
    handleOnChnagePassword,
  };

  const onLogin = async () => {};

  return { email, password, authValidateError, handler, onLogin };
};
