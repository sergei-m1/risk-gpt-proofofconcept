import { Box, VStack, Text, Collapse, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import SideBarSection from "./SideBarSection";
import SideBarDescription from "./SideBarDescription";
import { HiChevronDoubleLeft } from "react-icons/hi";

interface Props {
  closed: boolean;
  onToggleSidebar: () => void;
}

interface SideBarData {
  [key: string]: {
    title: string;
    text: string;
  };
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

  const sideBarData: SideBarData = {
    about: {
      title: "About",
      text: "Risk GPT is a Large Language Model (LLM) powered chat bot. It is using knowledge contained in a local repository of documents to answer questions on topics of Finance and Risk. This is a proof of concept model that has not seen too many documents and therefore its capabilities are",
    },
    technologies: {
      title: "Technologies",
      text: "This prototype is powered by the following technologies: 1. LangChain 2. LLama Index 3. Vicuna Open Source LLM model 4. Flask Restful API 5. Typescript 6. Chakra UI",
    },
    contact: {
      title: "Contact",
      text: "For more information on this prototype please contact Sergei Margolin at example@email.com. You can find the source code under MIT license here: example@github.com.",
    },
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
