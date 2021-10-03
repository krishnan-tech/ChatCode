import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Peer from "simple-peer";
import InsideModel from "./InsideModel";

let myPeer: Peer;

export default function ChatAndAudio({ roomId, userId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Stack direction="row" spacing={10}>
      <Button onClick={onOpen}>Join Audio and Video</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InsideModel />
            <InsideModel />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Stack>
  );
}
