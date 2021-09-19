import { Box, Button, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import Peer from "peerjs";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { socket_global } from "../utils/sockets";

export default function ChatAndAudio({ roomId }) {
  const [inAudio, setInAudio] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  return (
    <Stack direction="row" spacing={10}>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => setInAudio(!inAudio)}
      >
        {inAudio ? "Leave Audio" : "Join Audio"}
      </Button>
      {inAudio ? (
        <Box>
          <IconButton
            aria-label="Add to friends"
            icon={<AiOutlineAudioMuted />}
            colorScheme={!isMuted ? "teal" : "facebook"}
            onClick={() => setIsMuted(!isMuted)}
          />
        </Box>
      ) : null}
    </Stack>
  );
}
