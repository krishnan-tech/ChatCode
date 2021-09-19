import { Box, Button, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import Peer from "peerjs";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { socket_global } from "../utils/sockets";

var myPeer: Peer;
var audios: { [id: string]: { id: string; stream: MediaStream } } = {};
var peers: { [id: string]: Peer.MediaConnection } = {};
var myAudio: MediaStream | null;

export default function ChatAndAudio({ roomId }) {
  const [inAudio, setInAudio] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Voice room stuff
  // const getAudioStream = () => {
  //   if (typeof window !== "undefined") {
  //     const myNavigator =
  //       navigator.mediaDevices.getUserMedia ||
  //       // @ts-ignore
  //       navigator.mediaDevices.webkitGetUserMedia ||
  //       // @ts-ignore
  //       navigator.mediaDevices.mozGetUserMedia ||
  //       // @ts-ignore
  //       navigator.mediaDevices.msGetUserMedia;
  //     return myNavigator({ audio: true });
  //   }
  // };

  // const createAudio = (data: { id: string; stream: MediaStream }) => {
  //   const { id, stream } = data;
  //   if (!audios[id]) {
  //     const audio = document.createElement("audio");
  //     audio.id = id;
  //     audio.srcObject = stream;
  //     if (myPeer && id == myPeer.id) {
  //       myAudio = stream;
  //       audio.muted = true;
  //     }
  //     audio.autoplay = true;
  //     audios[id] = data;
  //     console.log("Adding audio: ", id);
  //   }
  // };

  // const removeAudio = (id: string) => {
  //   delete audios[id];
  //   const audio = document.getElementById(id);
  //   if (audio) audio.remove();
  // };

  // const destroyConnection = () => {
  //   console.log("distroying", audios, myPeer.id);
  //   if (audios[myPeer.id]) {
  //     const myMediaTracks = audios[myPeer.id].stream.getTracks();
  //     myMediaTracks.forEach((track) => {
  //       track.stop();
  //     });
  //   }
  //   if (myPeer) myPeer.destroy();
  // };

  // const setPeersListeners = (stream: MediaStream) => {
  //   myPeer.on("call", (call) => {
  //     call.answer(stream);
  //     call.on("stream", (userAudioStream) => {
  //       createAudio({ id: call.metadata.id, stream: userAudioStream });
  //     });
  //     call.on("close", () => {
  //       removeAudio(call.metadata.id);
  //     });
  //     call.on("error", () => {
  //       console.log("peer error");
  //       if (!myPeer.destroyed) removeAudio(call.metadata.id);
  //     });
  //     peers[call.metadata.id] = call;
  //   });
  // };

  // const newUserConnection = (stream: MediaStream) => {
  //   socket_global.on("userJoinedAudio", (userId) => {
  //     const call = myPeer.call(userId, stream, { metadata: { id: myPeer.id } });
  //     call.on("stream", (userAudioStream) => {
  //       createAudio({ id: userId, stream: userAudioStream });
  //     });
  //     call.on("close", () => {
  //       removeAudio(userId);
  //     });
  //     call.on("error", () => {
  //       console.log("peer error");
  //       if (!myPeer.destroyed) removeAudio(userId);
  //     });
  //     peers[userId] = call;
  //   });
  // };

  // useEffect(() => {
  //   if (inAudio) {
  //     myPeer = new Peer();
  //     myPeer.on("open", (userId) => {
  //       console.log("opened");
  //       getAudioStream().then((stream) => {
  //         socket_global.emit("joinAudioRoom", roomId, userId);
  //         stream.getAudioTracks()[0].enabled = !isMuted;
  //         newUserConnection(stream);
  //         setPeersListeners(stream);
  //         createAudio({ id: myPeer.id, stream });
  //       });
  //     });
  //     myPeer.on("error", (err) => {
  //       console.log("peerjs error: ", err);
  //       if (!myPeer.destroyed) myPeer.reconnect();
  //     });
  //     socket_global.on("userLeftAudio", (userId) => {
  //       console.log("user left aiudio:", userId);
  //       if (peers[userId]) peers[userId].close();
  //       removeAudio(userId);
  //     });
  //   } else {
  //     console.log("leaving", myPeer);
  //     if (myPeer) {
  //       socket_global.emit("leaveAudioRoom", myPeer.id);
  //       destroyConnection();
  //     }
  //     myAudio = null;
  //   }
  // }, [inAudio]);

  // useEffect(() => {
  //   if (inAudio) {
  //     if (myAudio) {
  //       myAudio.getAudioTracks()[0].enabled = !isMuted;
  //     }
  //   }
  // }, [isMuted]);

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
