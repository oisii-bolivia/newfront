export type AuthValidateError = {
  isError: boolean;
  message?: string;
};

const emailVatidator = (email: string): AuthValidateError => {
  let validateResult: AuthValidateError;
  const emailRegexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  if (email == null)
    return (validateResult = {
      isError: true,
      message: "値が入力されていません",
    });

  if (!email.match(emailRegexp))
    return (validateResult = {
      isError: true,
      message: "この値はeメールではありません",
    });

  return (validateResult = { isError: false });
};

const nameValidator = (name: string): AuthValidateError => {
  let validateResult: AuthValidateError;
  const { length } = name;

  if (length == 0)
    return (validateResult = {
      isError: true,
      message: "ユーザー名は16文字以下で入力してください",
    });

  if (length > 16)
    return (validateResult = {
      isError: true,
      message: "ユーザー名は16文字以下で入力してください",
    });

  return (validateResult = { isError: false });
};

const passwordValidator = (password: string): AuthValidateError => {
  let validateResult: AuthValidateError;
  const { length } = password;

  if (length < 8)
    return (validateResult = {
      isError: true,
      message: "8文字以上で入力してください",
    });

  if (password.search(/[0-9]/) < 0)
    return (validateResult = {
      isError: true,
      message: "数字を最低一文字入力してください",
    });

  return (validateResult = { isError: false });
};

export const authValidator = {
  emailVatidator,
  nameValidator,
  passwordValidator,
};
