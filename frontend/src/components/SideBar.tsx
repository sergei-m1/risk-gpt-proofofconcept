import { Box, VStack, Text, Collapse, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import SideBarSection from "./SideBarSection";
import SideBarDescription from "./SideBarDescription";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { sideBarData, SideBarData } from "../data/sideBarData";

interface Props {
  closed: boolean;
  onToggleSidebar: () => void;
}

// color="gray.800"
const SideBar = ({ closed, onToggleSidebar }: Props) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    if (closed) {
      onToggleSidebar();
    }
  };

  const activeDescription = sideBarData[activeSection];

  const filteredDescriptions = Object.entries(sideBarData).filter(
    ([key]) => key === activeSection
  );

  const [activeDescriptionKey, activeDescriptionValue] =
    filteredDescriptions[0];

  return (
    <Box paddingLeft={3} paddingY={10}>
      <HStack>
        <VStack align="left" spacing={4}>
          {Object.entries(sideBarData).map(([key, value]) => (
            <SideBarSection
              key={key}
              active={activeSection === key}
              title={value.title}
              onClick={() => handleSectionClick(key)}
            />
          ))}
        </VStack>
        {!closed && (
          <Box>
            <SideBarDescription text={activeDescriptionValue.text} />
          </Box>
        )}
      </HStack>
      <Box
        position="absolute"
        bottom={4}
        left={4}
        padding={2}
        onClick={onToggleSidebar}
        cursor="pointer"
      >
        <HiChevronDoubleLeft size={30} />
      </Box>
    </Box>
  );
};

export default SideBar;
