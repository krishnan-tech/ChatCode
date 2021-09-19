import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";
import { IconButton} from "@chakra-ui/react";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { BiPhone} from "react-icons/bi";

export default function ChatAndAudio() {
  return (
    <Stack direction="row" spacing={10}>
      <Button colorScheme="teal" variant="outline">
        Audio
        <Box
          as="button"
          height="20px"
          lineHeight="1.2"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="1px"
          px="8px"
          mx="5px"
          borderRadius="50px"
          fontSize="14px"
          fontWeight="semibold"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          //bg="black"
          borderColor="#ccd0d5"
          color="red"
          _hover={{ bg: "blackAlpha" }}
          _active={{
            bg: "blackAlpha",
            transform: "scale(0.98)",
            borderColor: "blackAlpha",
          }}
          _focus={{
            boxShadow:
              "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
          }}
        ></Box>
      </Button>

<Box >   
   <IconButton aria-label="Add to friends" icon={<AiOutlineAudioMuted />} />

</Box>
   
    
    </Stack>
  );
}
