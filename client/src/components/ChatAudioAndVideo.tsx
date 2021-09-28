import {
  Stack,
  Button,
  Box,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Peer from "simple-peer";
import React, { useEffect, useState } from "react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { socket_global } from "../utils/sockets";
import InsideModel from "./InsideModel";

let myPeer: Peer;

export default function ChatAndAudio({ roomId, userId }) {
  const [inAudio, setInAudio] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {
  //   myPeer = new Peer({ initiator: true });
  //   myPeer.on("signal", (id) => {
  //     console.log(id);
  //     socket_global.emit("join-room", roomId, userId);
  //   });
  // }, []);

  // useEffect(() => {
  //   socket_global.on("user-connected", (userId) => {
  //     console.log("user connected: ", userId);
  //   });
  // });

  // navigator.mediaDevices
  //   .getUserMedia({
  //     video: true,
  //     audio: true,
  //   })
  //   .then((stream) => {
  //     var video = document.querySelector("video");
  //     addVideoStream(video, stream);

  //     myPeer.on("call", (call) => {
  //       call.answer(stream);
  //     });

  //     socket_global.on("user-connected", (userId) => {
  //       connectToNewUser(userId, stream);
  //     });
  //   });

  // const connectToNewUser = (userId, stream) => {
  //   const call = myPeer.call(userId);
  //   var video = document.querySelector("video");

  //   call.on("stream", (userVideoStream) => {
  //     addVideoStream(video, userVideoStream);
  //   });

  //   call.on("close", () => {
  //     video.remove();
  //   });
  // };

  // const addVideoStream = (video, stream) => {
  //   video.srcObject = stream;
  //   video.addEventListener("loadedmetadata", () => {
  //     video.play();
  //   });
  //   var videoGrid = document.querySelector("video-grid");
  //   videoGrid.append(video);
  // };

  return (
    <Stack direction="row" spacing={10}>
      {/* <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => {
          setInAudio(!inAudio);
          setIsMuted(false);
        }}
        >
        {inAudio ? "Leave Audio" : "Join Audio"}
      </Button> */}
      {/* {inAudio ? (
        <Box>
        <IconButton
        aria-label="Add to friends"
        icon={<AiOutlineAudioMuted />}
        colorScheme={!isMuted ? "teal" : "facebook"}
        onClick={() => setIsMuted(!isMuted)}
        />
        </Box>
      ) : null} */}
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
