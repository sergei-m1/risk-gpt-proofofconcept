import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SideBarDescription = ({ children }: Props) => (
  <Box paddingY={2} paddingX={6}>
    {children}
  </Box>
);

export default SideBarDescription;
