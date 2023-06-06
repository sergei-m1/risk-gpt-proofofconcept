import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Message } from "./ChatWindow";

const ChatMessage = ({ type, text }: Message) => {
  const isSentMessage = type === "sent";
  const bgColor = isSentMessage ? "blue.100" : "blue.500";
  const fontColor = isSentMessage ? "black" : "black";
  const alignment = isSentMessage ? "flex-end" : "flex-start";

  const messageStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    color: fontColor,
    borderRadius: 18,
    margin: 2,
    padding: "10px",
    paddingRight: "20px",
    paddingLeft: "20px",
    maxWidth: "80%", // Limit the width to 80% of available space
    alignSelf: alignment, // Align the message to the right or left
    wordWrap: "break-word" as "break-word", // Break long words onto the next line
  };

  return (
    <Box display="flex" justifyContent={alignment}>
      <Box sx={messageStyle}>
        <Text>{text}</Text>
      </Box>
    </Box>
  );
};

export default ChatMessage;
