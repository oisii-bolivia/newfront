import { Box, Icon } from "@chakra-ui/react";
import { Menu } from "lucide-react";
import { FC } from "react";

type Props = {
  onClick: () => void;
};

export const MenuButton: FC<Props> = ({ onClick }) => {
  return (
    <Box
      pos={"absolute"}
      top={"68px"}
      right={"28px"}
      w={"32px"}
      h={"32px"}
      borderRadius={"8px"}
      bgColor={"primary.200"}
      display={"grid"}
      placeItems={"center"}
      onClick={onClick}
    >
      <Icon as={Menu} color={"black"} size={"24px"} />
    </Box>
  );
};
