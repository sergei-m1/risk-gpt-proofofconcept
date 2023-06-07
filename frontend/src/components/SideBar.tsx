import { Box, VStack, Text, Collapse, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

// color="gray.800"
const SideBar = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <Box paddingLeft={3} paddingY={10}>
      <HStack>
        <VStack align="left" spacing={4}>
          <Text
            paddingY={2}
            fontWeight={activeSection === "about" ? "bold" : "normal"}
            cursor="pointer"
            onClick={() => handleSectionClick("about")}
          >
            About
          </Text>
          <Text
            paddingY={2}
            fontWeight={activeSection === "technologies" ? "bold" : "normal"}
            cursor="pointer"
            onClick={() => handleSectionClick("technologies")}
          >
            Technologies
          </Text>

          <Text
            paddingY={2}
            fontWeight={activeSection === "contact" ? "bold" : "normal"}
            cursor="pointer"
            onClick={() => handleSectionClick("contact")}
          >
            Contact
          </Text>
        </VStack>
        <Box>
          <Collapse in={activeSection === "about"}>
            <Text paddingY={2} paddingX={6} alignItems="flex-start">
              Risk GPT is a Large Language Model (LLM) powered chat bot. It is
              using knowledge contained in a local repository of documents to
              answer questions on topics of Finance and Risk. This is a proof of
              concept model that has not seen too many documents and therefore
              its capabilities are limited. To understand what topics Risk GPT
              Prototype has knowldege on, please refer to the Knowledge section.
            </Text>
          </Collapse>
          <Collapse in={activeSection === "technologies"}>
            <Text paddingY={2} paddingX={6}>
              This prototype is powered by the following technologies: 1.
              LangChain 2. LLama Index 3. Vicuna Open Source LLM model 4. Flask
              Restful API 5. Typescript 6. Chakra UI
            </Text>
          </Collapse>
          <Collapse in={activeSection === "contact"}>
            <Text paddingY={2} paddingX={6}>
              For more information on this prototype please contact Sergei
              Margolin at example@email.com. You can find the source code under
              MIT license here: example@github.com.
            </Text>
          </Collapse>
        </Box>
      </HStack>
    </Box>
  );
};

export default SideBar;
