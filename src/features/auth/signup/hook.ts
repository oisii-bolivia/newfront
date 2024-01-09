import { ChangeEvent, useState } from "react";
import { AuthValidateError, authValidator } from "../validation";
import { axiosClient } from "@/lib/api_client";
import { redirect, useRouter } from "next/navigation";

export type ValidateStatus = {
  email: AuthValidateError;
  name: AuthValidateError;
  password: AuthValidateError;
};

export const useSignup = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [authValidateError, setAuthValidateError] = useState<ValidateStatus>({
    email: { isError: false },
    name: { isError: false },
    password: { isError: false },
  });

  const handleOnChnageEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const emailValidateResult = authValidator.emailVatidator(e.target.value);
    setAuthValidateError((pre) => ({ ...pre, email: emailValidateResult }));
  };

  const handleOnChnageName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    const nameValidateResult = authValidator.nameValidator(e.target.value);
    setAuthValidateError((pre) => ({ ...pre, name: nameValidateResult }));
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
    handleOnChnageName,
    handleOnChnagePassword,
  };

  const onSubmit = async () => {
    try {
      const result = await axiosClient.post("/api/auth/signup", {
        email,
        name,
        password,
      });

      if (result.status === 200) router.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  return { email, name, password, authValidateError, handler, onSubmit };
};
