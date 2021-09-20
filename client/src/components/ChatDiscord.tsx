import { ChatIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PREXIX_SERVER_URL } from "../utils/env";
import ChatAndAudio from "./ChatAudioAndVideo";
import ChatIconn from "./ChatIcon";
import { Messenger } from "./Messenger";
import dynamic from "next/dynamic";

export const ChatDiscordButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        variant="outline"
      >
        {/* Open */}
        <ChatIcon />
      </Button>
    </>
  );
};

export const ChatDiscord: React.FC<{ roomId: string }> = ({ roomId }) => {
  // useEffect(() => {
  //   import("peerjs").then(({ default: Peer }) => {
  //     console.log(Peer);
  //   });

  // }, []);

  const btnRef = React.useRef();
  const [inputState, setInputState] = useState("");
  const [newMessageSubmitted, setNewMessageSubmitted] = useState({});

  const isClient = typeof window !== undefined;
  // console.log(isClient);

  if (isClient) {
    return (
      <div style={{ height: "100vh", width: "100vw", backgroundColor: "red" }}>
        loading...
      </div>
    );
  }

  // console.log(window);

  // console.log(navigator);

  const submitMessageFn = async (msg: string, roomId: string) => {
    // Emit message to server
    // socket.emit("chatMessage", msg);

    const userD = JSON.parse(localStorage.getItem("user"));

    //console.log(usename)
    const message = {
      roomId: roomId,
      senderId: userD.UserId,
      senderName: userD.UserName,
      text: msg,
    };

    try {
      const res = await axios.post(PREXIX_SERVER_URL + "/messages/", message);
      setNewMessageSubmitted(res.data);
      setInputState("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box>
      <Grid templateColumns="repeat(2.5, 1fr)" gap={4}>
        <GridItem colStart={2} colEnd={4} h="10">
          Chat
        </GridItem>
      </Grid>
      <Messenger
        currentRoomId={roomId}
        newMessageSubmitted={newMessageSubmitted}
      />

      <Flex position="fixed" bottom="20">
        <Box p="5">
          <ChatAndAudio roomId={roomId} />
        </Box>
      </Flex>
      <Flex position="fixed" bottom="10">
        <Input
          placeholder="Type here..."
          value={inputState}
          onChange={(e) => setInputState(e.target.value)}
        />
        <Button
          colorScheme="blue"
          ml="2"
          onClick={() => submitMessageFn(inputState, roomId)}
        >
          send
        </Button>
      </Flex>
    </Box>
  );
};
