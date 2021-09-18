import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useState } from "react";
  
  export default function JoinRoom(): JSX.Element {
    // states
    const [userName, setUserName] = useState("");
    const [roomId, setRoomId] = useState("");
    const [password, setPassword] = useState("");
  
    const setUserNameEventHandler = (e) => {
      setUserName(e.target.value);
    };
  
    return (
      <Flex
        minH={"50vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Join New Room
          </Heading>
          <form>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input
                type="string"
                value={userName}
                onChange={setUserNameEventHandler}
                placeholder="Enter Username"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Room Id</FormLabel>
              <Input
                type="string"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                placeholder="Enter Room Id"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Room Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="* * * * * * *"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <Text
              fontSize={{ base: "sm", sm: "md" }}
              color={useColorModeValue("gray.800", "gray.400")}
              my="5"
            >
              Ask from room host or{" "}
              <Link color={"blue.400"} href="/createroom">
                Make your own room
              </Link>
            </Text>
            <Stack spacing={6}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Join Room
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    );
  }
  