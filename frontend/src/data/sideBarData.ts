export interface SideBarData {
  [key: string]: {
    title: string;
    text: string;
  };
}

export const sideBarData: SideBarData = {
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
