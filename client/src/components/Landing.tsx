import NextLink from "next/link";
import {
  Box,
  Flex,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Landing(): JSX.Element {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Code Sharing{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"} fontSize="xl" px="5">
          Now you don't need to be on discord and share your screen anymore with
          your fellow coders. Code collaboration with voice and chat rooms.
          <br />
          Connect with{" "}
          <p style={{ color: "orange", display: "inline" }}>Chatcode</p>.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <NextLink href="/joinroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Join New Room
            </Button>
          </NextLink>
          <NextLink href="/createroom">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"orange.400"}
              _hover={{ bg: "orange.500" }}
            >
              Create Room
            </Button>
          </NextLink>
        </Stack>

        <Stack spacing={6} direction={"row"}>
          <NextLink href="#rooms">
            <Button
              rounded={"full"}
              px={6}
              colorScheme={"orange"}
              bg={"gray.800"}
              _hover={{ bg: "gray.600" }}
            >
              Enter Into Room
            </Button>
          </NextLink>
        </Stack>
      </Stack>
    </Container>
  );
}
