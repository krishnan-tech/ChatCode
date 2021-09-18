import { Box, Flex, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";

const Links = [
  ["Home", "/"],
  ["Create Room", "/createroom"],
  ["Join Room", "/joinroom"],
  ["Room", "/room"],
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children[1]}
  >
    {children[0]}
  </Link>
);

export default function withAction() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <Flex>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        style={isChatOpen ? { width: "75%" } : { width: "100%" }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>ChatCode</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link[1]}>{link}</NavLink>
              ))}
            </HStack>
            <Box>
              <DarkModeSwitch />
            </Box>
          </HStack>
          <div onClick={() => setIsChatOpen(!isChatOpen)}>okay</div>

          {/* <ChatDrawer /> */}
        </Flex>
      </Box>

      {isChatOpen ? <Box>add chat component here</Box> : null}
    </Flex>
  );
}
