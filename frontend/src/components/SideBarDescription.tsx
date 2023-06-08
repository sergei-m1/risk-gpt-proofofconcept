import { Collapse, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  text: string;
}

const SideBarDescription = ({ text }: Props) => (
  <Text paddingY={2} paddingX={6}>
    {text}
  </Text>
);

export default SideBarDescription;
