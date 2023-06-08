import { Box, VStack, Text, Collapse, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import SideBarSection from "./SideBarSection";
import SideBarDescription from "./SideBarDescription";
import { HiChevronDoubleLeft } from "react-icons/hi";

interface Props {
  closed: boolean;
  onToggleSidebar: () => void;
}

// color="gray.800"
const SideBar = ({ closed, onToggleSidebar }: Props) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Box paddingLeft={3} paddingY={10}>
      <HStack>
        <VStack align="left" spacing={4}>
          <>
            <SideBarSection
              active={activeSection === "about"}
              title="About"
              onClick={() => handleSectionClick("about")}
            />
            <SideBarSection
              active={activeSection === "technologies"}
              title="Technologies"
              onClick={() => handleSectionClick("technologies")}
            />
            <SideBarSection
              active={activeSection === "contact"}
              title="Contact"
              onClick={() => handleSectionClick("contact")}
            />
          </>
        </VStack>
        {!closed && (
          <Box>
            <SideBarDescription
              active={activeSection === "about"}
              text="Risk GPT is a Large Language Model (LLM) powered chat bot. It is using knowledge contained in a local repository of documents to answer questions on topics of Finance and Risk. This is a proof of concept model that has not seen too many documents and therefore its capabilities are limited. To understand what topics Risk GPT Prototype has knowledge on, please refer to the Knowledge section."
            />
            <SideBarDescription
              active={activeSection === "technologies"}
              text="This prototype is powered by the following technologies: 1. LangChain 2. LLama Index 3. Vicuna Open Source LLM model 4. Flask Restful API 5. Typescript 6. Chakra UI"
            />
            <SideBarDescription
              active={activeSection === "contact"}
              text="For more information on this prototype please contact Sergei Margolin at example@email.com. You can find the source code under MIT license here: example@github.com."
            />
          </Box>
        )}
      </HStack>
      <Box
        position="absolute"
        bottom={0}
        left={0}
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
