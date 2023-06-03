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
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="red" overflowY="auto" padding={4}>
        <ChatWindow />
      </GridItem>
    </Grid>
  );
}

export default App;
