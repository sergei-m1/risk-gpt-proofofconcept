import { Collapse, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  active: boolean;
  text: string;
}

const SideBarDescription = ({ active, text }: Props) => (
  <Collapse in={active}>
    <Text paddingY={2} paddingX={6}>
      {text}
    </Text>
  </Collapse>
);

export default SideBarDescription;
