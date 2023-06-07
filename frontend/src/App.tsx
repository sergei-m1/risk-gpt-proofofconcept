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
import SideBar from "./components/SideBar";

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
        lg: "1fr 1fr",
      }}
      minHeight="100vh"
      maxHeight="100vh"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gray.200">
          <SideBar />
        </GridItem>
      </Show>
      <GridItem area="main" overflowY="auto" bg="gray.50" padding={6}>
        <Box height="100%" width="100%" display="flex" flexDirection="column">
          <Box flex="1" overflowY="auto">
            <ChatWindow />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
