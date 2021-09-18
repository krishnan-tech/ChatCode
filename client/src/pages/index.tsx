import { EditorComponent } from "../components/EditorComponent";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Index = () => (
  <div>
    <Navbar />

    <Box p={4}>
      <EditorComponent />
    </Box>
  </div>
);

export default Index;