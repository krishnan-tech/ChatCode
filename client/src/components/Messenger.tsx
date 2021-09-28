import { Box, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { format } from "timeago.js";
import { PREXIX_SERVER_URL } from "../utils/env";
import { socket_global } from "../utils/sockets";

interface MessengerProps {
  currentRoomId: string;
  newMessageSubmitted: any;
}

export const Messenger: React.FC<MessengerProps> = ({
  currentRoomId,
  newMessageSubmitted,
}) => {
  const [roomState, setRoomState] = useState([]);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  // const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user")).UserId
      : "randomId";

    const getConversations = async () => {
      const url = PREXIX_SERVER_URL + "/room/" + user;
      const res = await axios.get(url);

      // console.log(res);
      setRoomState(res.data);
    };
    getConversations();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          PREXIX_SERVER_URL + "/messages/" + currentRoomId
        );
        // console.log(res);
        setMessages(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    getMessages();
  }, [roomState, currentRoomId]);

  useEffect(() => {
    socket_global.on("message", (message: any) => {
      if (!(message.text == undefined)) {
        setMessages([...messages, message]);
      }
    });
  });

  useEffect(() => {
    socket_global.emit("chatMessage", newMessageSubmitted);
    // console.log(newMessageSubmitted);
    // setMessages([...messages, newMessageSubmitted]);
  }, [newMessageSubmitted]);

  useEffect(() => {
    // @ts-ignore
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      {messages.map((msg, i) => {
        return (
          <Box
            bg="facebook.200"
            w="100%"
            p={4}
            color="white"
            rounded="base"
            mb="4"
            key={msg._id}
          >
            <Flex>
              {console.log(msg)}
              <Box color="facebook.800">{msg.senderName}</Box>
              <Box color="facebook.800" ml={4}>
                {format(msg.createdAt)}
              </Box>
            </Flex>
            <Box color="blackAlpha.800">{msg.text}</Box>
          </Box>
        );
      })}
      <div ref={scrollRef}></div>
    </div>
  );
};
