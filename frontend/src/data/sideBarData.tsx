import { ReactNode } from "react";
import { UnorderedList, ListItem, Text, Link } from "@chakra-ui/react";

export interface SideBarData {
  [key: string]: {
    title: string;
    text: ReactNode;
  };
}

export const sideBarData: SideBarData = {
  about: {
    title: "About",
    text: (
      <>
        <Text>
          Risk GPT is a Large Language Model (LLM) powered chat bot. It is using
          knowledge contained in a local repository of documents to answer
          questions on topics of Finance and Risk. This is a proof of concept
          model that has not seen too many documents and therefore its
          capabilities are limited.
        </Text>
      </>
    ),
  },
  technologies: {
    title: "Technologies",
    text: (
      <>
        <Text>This prototype is powered by the following technologies:</Text>
        <UnorderedList spacing={2}>
          <ListItem>LangChain</ListItem>
          <ListItem>LLama Index</ListItem>
          <ListItem>Vicuna Open Source LLM model</ListItem>
          <ListItem>Flask Restful API</ListItem>
          <ListItem>Typescript</ListItem>
          <ListItem>Chakra UI</ListItem>
        </UnorderedList>
      </>
    ),
  },
  contact: {
    title: "Contact",
    text: (
      <Text>
        For more information on this prototype please contact Sergei Margolin at
        example@email.com.
        <br />
        You can find the source code under MIT license here:{" "}
        <Link
          href="https://github.com/sergei-m1/risk-gpt-proofofconcept"
          isExternal
        >
          GitHub repository
        </Link>
      </Text>
    ),
  },
};
