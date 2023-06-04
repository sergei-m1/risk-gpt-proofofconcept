import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Show,
  Text,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      minHeight="100vh"
      maxHeight="100vh"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow.200">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" overflowY="auto" bg="red" padding={4}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection="column"
          overflow="hidden"
        >
          <Box flex="1" overflowY="auto">
            <ChatWindow />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
