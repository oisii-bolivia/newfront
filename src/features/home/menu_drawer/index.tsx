import { LogoutButton } from "@/features/auth/logout";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { User } from "lucia";
import { ChevronLeft, HelpCircle, Pencil } from "lucide-react";
import { FC } from "react";
import NextLink from "next/link";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
};

export const MenuDrawer: FC<Props> = ({ isOpen, onClose, user }) => {
  const buildProfileEditButton = () => {
    return (
      // pass profile url
      <NextLink href={"/"}>
        <Button
          variant={"outline"}
          leftIcon={<Icon as={Pencil} size={"14px"} color={"white"} />}
          borderRadius={"9999px"}
          h={"auto"}
          py={"8px"}
          fontSize={"14px"}
          color={"white"}
        >
          プロフィール
        </Button>
      </NextLink>
    );
  };

  const buildQuestionText = () => {
    return (
      // pass question url
      <NextLink href={"/"}>
        <HStack gap={"8px"}>
          <Icon as={HelpCircle} size={"24px"} color={"white"} />
          <Text fontSize={"16px"} color={"white"}>
            よくある質問
          </Text>
        </HStack>
      </NextLink>
    );
  };

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bgColor={"secondary.200"} px={"24px"}>
        <DrawerHeader p={0} mt={"68px"}>
          <Icon
            as={ChevronLeft}
            size={"24px"}
            color={"white"}
            onClick={onClose}
          />
        </DrawerHeader>

        <DrawerBody mt={"52px"} p={0}>
          <VStack gap={"32px"} alignItems={"start"}>
            <Text color={"white"} fontSize={"24px"} fontWeight={"600"}>
              {user?.username}
            </Text>
            {buildProfileEditButton()}
            {buildQuestionText()}
          </VStack>
          <Box mt={"106px"}>
            <LogoutButton />
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
