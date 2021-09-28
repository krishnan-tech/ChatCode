import React, { useState } from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import { ChatDiscord, ChatDiscordButton } from "../../components/ChatDiscord";
import Navbar from "../../components/Navbar";
import RoomControls from "../../components/RoomControls";
import { useRouter } from "next/router";

const Room = (props) => {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [editorSize, setEditorSize] = useState(8);
  const [chatSize, setChatSize] = useState(2);

  const router = useRouter();
  const { id } = router.query;

  const manageSize = () => {
    if (isChatOpen) {
      setEditorSize(10);
      setChatSize(0);
    } else {
      setEditorSize(8);
      setChatSize(2);
    }
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div>
      <Navbar />
      <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(10, 1fr)">
        <GridItem colSpan={chatSize} colStart={11} bg="tsizeomato">
          <div onClick={manageSize}>
            <ChatDiscordButton></ChatDiscordButton>
          </div>
        </GridItem>
      </Grid>

      <Grid
        h="80vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(10, 1fr)"
      >
        <GridItem colSpan={editorSize}>
          <RoomControls />
        </GridItem>
        <GridItem colSpan={chatSize}>
          {/* <div onClick={manageSize}><ChatDiscordButton></ChatDiscordButton></div> */}
          {isChatOpen ? (
            <Box
              h="85vh"
              borderLeft="4px"
              borderLeftColor="whiteAlpha.400"
              p="20px"
              backgroundColor="whiteAlpha.400"
              style={{
                maxHeight: "65vh",
                overflow: "scroll",
                overflowX: "hidden",
              }}
            >
              {/* <ChatDiscord roomId={id as string} /> */}
              <div suppressHydrationWarning={true}>
                {process.browser && <ChatDiscord roomId={id as string} />}
                {/* <div>some other component</div> */}
              </div>
            </Box>
          ) : null}
        </GridItem>
      </Grid>
    </div>
  );
};

export default Room;
