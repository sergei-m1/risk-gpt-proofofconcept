import { ReactNode } from "react";
import {
  UnorderedList,
  ListItem,
  Text,
  Link,
  OrderedList,
} from "@chakra-ui/react";

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
          questions on topics of Finance and Risk.
          <br />
          <br />
          This is a proof of concept version of the model that only has
          documents on the topic of IRRBB in its knowledge base. The
          capabilities of the model are limited due to the limited number of
          documents in the knowledge base. For more information on the knowledge
          base refer to the "Knowledge" section.
          <br />
          <br />
          For instructions on how to use this model refer to the "How to"
          section.
        </Text>
      </>
    ),
  },
  howTo: {
    title: "How to",
    text: (
      <>
        <Text>To use Risk GPT Prototype follow these steps:</Text>
        <UnorderedList spacing={2}>
          <ListItem>
            Submit a question on a topic of IRRBB by typing your message into
            the chat input box
          </ListItem>
          <ListItem>Wait for the bot to respond</ListItem>
          <ListItem>
            The bot will provide links to sources that it used to answer the
            question. If you want to read more from the sources press on the
            provided links.
          </ListItem>
        </UnorderedList>
      </>
    ),
  },
  knowledge: {
    title: "Knowledge",
    text: (
      <>
        <Text paddingBottom={4}>
          This prototype has a limited set of publicly available documents on
          the topic of IRRBB in its knowldege base. The links to these documents
          are provided below (press the link to open documents in a new tab):
        </Text>
        <OrderedList spacing={2}>
          <ListItem>
            <Link
              href="https://www.apra.gov.au/sites/default/files/draft_prudential_standard_aps_117_capital_adequacy_interest_rate_risk_in_the_banking_book.pdf"
              isExternal
            >
              APS117
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.bis.org/bcbs/publ/d368.pdf" isExternal>
              Basel Committee on Banking Supervision - Interest rate risk in the
              banking book
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://assets.kpmg.com/content/dam/kpmg/au/pdf/2019/irrbb-revisited-nov-2019.pdf"
              isExternal
            >
              KPMG - IRRBB Revisited
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.kevindavis.com.au/BankingBook/22-%20IRRBB.pdf"
              isExternal
            >
              Kevin Davis - IRRBB
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www2.deloitte.com/content/dam/Deloitte/dk/Documents/risk/lu-interest-rate-risk-banking-book-18012018.pdf"
              isExternal
            >
              Deloitte - Interest Rate Risk in the Banking Book Survey
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.apra.gov.au/sites/default/files/APG-117-January%202008_0.pdf"
              isExternal
            >
              APG117
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.efrag.org/Assets/Download?assetUrl=%2Fsites%2Fwebpublishing%2FMeeting%20Documents%2F2006231239205943%2F06-03%20DRM%20IRRBB%20EFRAG%20TEG%2021-05-19.pdf"
              isExternal
            >
              IRRBB - risk management strategies
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.eba.europa.eu/sites/default/documents/files/documents/10180/2282655/169993e1-ad7a-4d78-8a27-1975b4860da0/Guidelines%20on%20the%20management%20of%20interest%20rate%20risk%20arising%20from%20non-trading%20activities%20%28EBA-GL-2018-02%29.pdf?retry=1"
              isExternal
            >
              Guidelines on the management of interest rate risk arising from
              non-trading book activities
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.researchgate.net/publication/320939054_A_Stochastic_Approach_to_the_Measurement_of_Interest_Rate_Risk_in_the_Banking_Book"
              isExternal
            >
              A stochastic approach to the measurement of interest rate risk in
              the banking book
            </Link>
          </ListItem>
        </OrderedList>
      </>
    ),
  },
  technologies: {
    title: "Technologies",
    text: (
      <>
        <Text>This prototype is powered by the following technologies:</Text>
        <UnorderedList spacing={2}>
          <ListItem>OpenAI GPT 3.5 Turbo Language Model</ListItem>
          <ListItem>Instructor Embeddings</ListItem>
          <ListItem>Chroma Vectorstore</ListItem>
          <ListItem>LangChain</ListItem>
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
        You can find the source code under MIT license here by following this
        link:{" "}
        <Link
          href="https://github.com/sergei-m1/risk-gpt-proofofconcept"
          isExternal
        >
          GitHub repository
        </Link>
      </Text>
    ),
  },
  disclaimer: {
    title: "Disclaimer",
    text: (
      <Text>
        The information provided by this chatbot is for informational purposes
        only and should not be considered as professional advice. Any decisions
        made based on the chatbot's output are solely at the user's discretion
        and risk.
        <br />
        <br />
        We cannot accept any liability or responsibility for any damages,
        losses, or consequences arising from the use of this chatbot or reliance
        on its responses. Users are encouraged to use their own judgment and
        seek professional advice when necessary.
        <br />
        <br />
        The chatbot's responses are generated based on its knowledge base, which
        may not always contain the most up-to-date or accurate information. It
        is important to verify any information obtained from the chatbot through
        other reliable sources before making decisions or taking any actions.
      </Text>
    ),
  },
};
