import { ChatIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Box,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export const ChatDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        {/* Open */}
        <ChatIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        onOverlayClick={() => onOpen()} // open when click outside
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Chat</DrawerHeader>

          <DrawerBody>
            <Box
              bg="facebook.200"
              w="100%"
              p={4}
              color="white"
              rounded="base"
              mb="4"
            >
              <Flex>
                <Box color="facebook.800">Krishnan</Box>
                <Box color="facebook.800" ml={4}>
                  3:30
                </Box>
              </Flex>
              <Box color="blackAlpha.800">message 1</Box>
            </Box>
            <Box
              bg="facebook.200"
              w="100%"
              p={4}
              color="white"
              rounded="base"
              mb="4"
            >
              <Flex>
                <Box color="facebook.800">Darp</Box>
                <Box color="facebook.800" ml={4}>
                  3:33
                </Box>
              </Flex>
              <Box color="blackAlpha.800">message 2</Box>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Input placeholder="Type here..." />
            <Button colorScheme="blue" ml="2">
              send
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};