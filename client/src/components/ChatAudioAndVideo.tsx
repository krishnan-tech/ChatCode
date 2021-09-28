import { Stack, Button, Box, IconButton } from "@chakra-ui/react";
import Peer from "simple-peer";
import React, { useEffect, useState } from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { socket_global } from "../utils/sockets";

export default function ChatAndAudio({ roomId }) {
  const [inAudio, setInAudio] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  var peer1 = new Peer({ initiator: true }); // you don't need streams here
  var peer2 = new Peer();

  peer1.on("signal", (data) => {
    peer2.signal(data);
  });

  peer2.on("signal", (data) => {
    peer1.signal(data);
  });

  peer2.on("stream", (stream) => {
    var video = document.querySelector("video");
    if ("srcObject" in video) {
      video.srcObject = stream;
    } else {
      video.src = window.URL.createObjectURL(stream);
    }

    video.play();
  });

  function addMedia(stream) {
    peer1.addStream(stream);
  }

  navigator.mediaDevices
    .getUserMedia({
      video: false,
      audio: isMuted && inAudio,
    })
    .then(addMedia)
    .catch(() => {});

  return (
    <Stack direction="row" spacing={10}>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setInAudio(!inAudio);
          setIsMuted(false);
        }}
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
      <video hidden={true}></video>
    </Stack>
  );
}
