import { IconButton, Stack } from "@chakra-ui/react";
import React from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { BiPhone, BiVideoOff } from "react-icons/bi";

export const ChatIconn = () => {
  return (
    <Stack direction="row" spacing={20}>
      <IconButton aria-label="Add to friends" icon={<AiOutlineAudioMuted />} />
      <IconButton aria-label="Add to friends" icon={<BiPhone />} />
      <IconButton aria-label="Add to friends" icon={<BiVideoOff />} />
    </Stack>
  );
};

export default ChatIconn;
