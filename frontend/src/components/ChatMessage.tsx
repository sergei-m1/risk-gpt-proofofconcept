import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Message } from "./ChatWindow";

const ChatMessage = ({ type, text }: Message) => {
  const bgColor: string = type === "sent" ? "green.200" : "blue.200";
  const marginRightValue: number = type === "sent" ? 0 : 32;
  const marginLeftValue: number = type === "sent" ? 32 : 0;

  return (
    <Box
      backgroundColor={bgColor}
      marginRight={marginRightValue}
      marginLeft={marginLeftValue}
      borderRadius={15}
      marginBottom={4}
      padding={2}
    >
      <Text>{text}</Text>
    </Box>
  );
};

export default ChatMessage;
