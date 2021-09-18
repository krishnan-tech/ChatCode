import { ChatIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Input, useDisclosure } from "@chakra-ui/react";
import { format } from "path";
import React, { useState } from "react";

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
  const btnRef = React.useRef();
  const [inputState, setInputState] = useState("");

  return (
    <Box>
      <Box
        bg="facebook.200"
        w="100%"
        p={4}
        color="white"
        rounded="base"
        mb="4"
        // key={msg._id}
      >
        <Flex>
          <Box color="facebook.800">Krishnan</Box>
          <Box color="facebook.800" ml={4}>
            2 hour ago
          </Box>
        </Flex>
        <Box color="blackAlpha.800">Hello there</Box>
      </Box>
      <Box
        bg="facebook.200"
        w="100%"
        p={4}
        color="white"
        rounded="base"
        mb="4"
        // key={msg._id}
      >
        <Flex>
          <Box color="facebook.800">Krishnan</Box>
          <Box color="facebook.800" ml={4}>
            2 hour ago
          </Box>
        </Flex>
        <Box color="blackAlpha.800">Hello there</Box>
      </Box>
      <Box
        bg="facebook.200"
        w="100%"
        p={4}
        color="white"
        rounded="base"
        mb="4"
        // key={msg._id}
      >
        <Flex>
          <Box color="facebook.800">Krishnan</Box>
          <Box color="facebook.800" ml={4}>
            2 hour ago
          </Box>
        </Flex>
        <Box color="blackAlpha.800">Hello there</Box>
      </Box>

      <Flex position="fixed" bottom="10">
        <Input
          placeholder="Type here..."
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <Button colorScheme="blue" ml="2">
          send
        </Button>
      </Flex>
    </Box>
  );
};
