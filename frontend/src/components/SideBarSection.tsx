import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  active: boolean;
  title: string;
  onClick: () => void;
}

const SideBarSection = ({ active, title, onClick }: Props) => (
  <Text
    paddingY={2}
    fontWeight={active ? "bold" : "normal"}
    cursor="pointer"
    onClick={onClick}
  >
    {title}
  </Text>
);

export default SideBarSection;
