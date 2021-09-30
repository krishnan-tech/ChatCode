import { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { Box}  from "@chakra-ui/react";
import ServerApi from "../utils/serverInstance";

export default function CreateRoom(): JSX.Element {
  // states
  const [userName, setUserName] = useState("");
  const [roomName, setRoomName] = useState("");
  // const[roomId, setRoomId] = useState('')
  const [roomPassword, setRoomPassword] = useState("123");

  const setUserNameEventHandler = (e) => {
    setUserName(e.target.value);
  };

  const formSubmitEventHandler = () => {
    ServerApi.post("/api/room", { userName, roomName, password: roomPassword })
      .then((res) => {
        console.log(res);

        if (res.data.error) {
          alert("Looks like some error occured");

   
        } else {
          const userData = {
            UserName: res.data.members[0].name,
            UserId: res.data.members[0].userId,
            RoomName: res.data.roomName,
            RoomId: res.data.roomId,
          };

          localStorage.setItem("user", JSON.stringify(userData));

          // console.log("room is created!!!!!!!!!");
          // alert(`Room is created & Room ID is ${res.data.roomId}`);
          location.replace(`/room/${res.data.roomId}`);
        }
      })
      .catch((err) => {
       alert("Looks like some error occured");
   
      });
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
          Create New Room
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
            <FormLabel>Room Name</FormLabel>
            <Input
              type="string"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              placeholder="Enter RoomName"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <FormControl mt={6}>
            <FormLabel>Room Password (Default: 123)</FormLabel>
            <Input
              type="password"
              value={roomPassword}
              onChange={(e) => setRoomPassword(e.target.value)}
              placeholder="* * * * * * *"
              _placeholder={{ color: "gray.500" }}
            />
          </FormControl>

          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
            my="5"
          >
            Create your room or{" "}
            <Link color={"blue.400"} href="/joinroom">
              Join another
            </Link>
          </Text>

          <Stack spacing={6}>
            <Button
              onClick={formSubmitEventHandler}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Create Room
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
