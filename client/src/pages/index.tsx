import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Editor } from "../components/EditorComponent";

const Index = () => (
  <div>
    <Navbar />

    <Box p={4}>
      <Editor />
    </Box>
  </div>
);

export default Index;