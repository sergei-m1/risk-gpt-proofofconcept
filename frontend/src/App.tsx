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
import { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";

function App() {
  const [sidebarClosed, setSidebarClosed] = useState(false);

  const columnWidth = sidebarClosed ? "0.25fr 1fr" : "0.6fr 1fr";

  const handleToggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

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
        lg: columnWidth,
      }}
      minHeight="100vh"
      maxHeight="100vh"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gray.200">
          <SideBar
            closed={sidebarClosed}
            onToggleSidebar={handleToggleSidebar}
          />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        overflowY="auto"
        bg="gray.50"
        padding={6}
        width={sidebarClosed ? "100%" : "auto"}
      >
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
