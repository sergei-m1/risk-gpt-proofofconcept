import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  type: "sent" | "received";
  text: string;
}

const ChatMessage = ({ type, text }: Props) => {
  const bgColor = type === "sent" ? "green.200" : "blue.200";
  const marginRightValue = type === "sent" ? 0 : 20;
  const marginLeftValue = type === "sent" ? 20 : 0;

  return (
    <Box
      backgroundColor={bgColor}
      marginRight={marginRightValue}
      marginLeft={marginLeftValue}
      borderRadius={4}
      marginBottom={4}
      padding={2}
    >
      <Text>{text}</Text>
    </Box>
  );
};

export default ChatMessage;
