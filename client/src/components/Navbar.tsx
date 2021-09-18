import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Switch,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";

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
  let isDarkTheme = true;

  if (typeof window !== "undefined") {
    isDarkTheme =
      localStorage.getItem("chakra-ui-color-mode") === "dark" ? true : false;
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isToggleOpen, setIsToggleOpen] = useState(isDarkTheme);

  useEffect(() => {
    if (isToggleOpen) {
      localStorage.setItem("chakra-ui-color-mode", "dark");
    } else {
      localStorage.setItem("chakra-ui-color-mode", "light");
    }
  }, [isToggleOpen]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
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
            {console.log(isToggleOpen)}
            <Box>
              <Switch
                colorScheme="teal"
                size="lg"
                onChange={() => setIsToggleOpen(!isToggleOpen)}
                isChecked={isToggleOpen}
                defaultChecked={isToggleOpen}
              />
            </Box>
          </HStack>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
    </Box>

      {/* <Box p={4}>Main Content Here</Box> */ }
    </>
  );
}
