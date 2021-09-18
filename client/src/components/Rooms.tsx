import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    Container,
    Button,
    Text,
  } from "@chakra-ui/react";
  import { ArrowForwardIcon } from "@chakra-ui/icons";
  export default function Landing(): JSX.Element {
    return (
      <div style={{ background: "lightgray", padding: "20px 0" }} id="rooms">
        <Container maxW={"7xl"} id="rooms" style={{ background: "lightgray" }}>
          <Text fontSize="3xl">Enter Into Rooms</Text>
          <Table
            variant="simple"
            colorScheme="facebook"
            border="1px"
            borderColor="gray"
            my="3"
          >
            {/* <TableCaption>Table Caption here</TableCaption> */}
            <Thead bg="blue">
              <Tr>
                <Th fontSize="xl" color="white">
                  Room Id
                </Th>
                <Th fontSize="xl" color="white">
                  Room Name
                </Th>
                <Th>-</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>dv5-dmv-dv5</Td>
                <Td>Codekpur</Td>
                <Td>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="facebook">
                    Enter Into Room
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>dv5-dmv-dv5</Td>
                <Td>Shikhau Coders</Td>
                <Td>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="facebook">
                    Enter Into Room
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>dv5-dmv-dv5</Td>
                <Td>Long Challange</Td>
                <Td>
                  <Button rightIcon={<ArrowForwardIcon />} colorScheme="facebook">
                    Enter Into Room
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Container>
      </div>
    );
  }
  