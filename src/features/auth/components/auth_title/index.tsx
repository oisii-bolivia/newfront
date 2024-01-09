import { Heading } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  text: string;
};

export const AuthTitle: FC<Props> = ({ text }) => {
  return (
    <Heading fontSize={"24px"} fontWeight={600}>
      {text}
    </Heading>
  );
};
