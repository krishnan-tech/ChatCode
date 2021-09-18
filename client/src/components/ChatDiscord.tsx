import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";

import { Center, Square, Circle } from "@chakra-ui/react"

export const ChatDiscordButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          {/* Open */}
          <ChatIcon />
        </Button>

      </>
    );
  };


export const ChatDiscord = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    return (
      <>

      <Box>

    Chat
      </Box>


      </>
    );
  };