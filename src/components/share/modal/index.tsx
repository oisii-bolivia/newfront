import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: ReactNode;
  footer: ReactNode;
};

export const AppModal: FC<Props> = ({
  isOpen,
  onClose,
  title,
  content,
  footer,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent mx={"16px"}>
        <ModalHeader>{title}</ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody my={"16px"}>{content}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
