import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Message } from "./ChatWindow";

const ChatMessage = ({ type, text, sources, provideSources }: Message) => {
  const isSentMessage = type === "sent";
  const bgColor = isSentMessage ? "gray.600" : "gray.200";
  const fontColor = isSentMessage ? "white" : "black";
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

  if (provideSources && sources && sources.length > 0) {
    console.log("Sources should be rendered");
    console.log(provideSources);
    console.log(sources);
    console.log(sources.length > 0);
  } else {
    console.log("Sources should not be rendered");
    console.log(provideSources);
    console.log(sources);
    console.log(sources.length > 0);
  }

  const renderMessageContent = () => {
    if (provideSources && sources && sources.length > 0) {
      return (
        <>
          <Text>These are the used sources: </Text>
          {sources.map((source, index) => (
            <Text key={index} fontSize="sm" fontStyle="italic" color="gray.500">
              {source}
            </Text>
          ))}
        </>
      );
    } else {
      return <Text>{text}</Text>;
    }
  };

  return (
    <Box display="flex" justifyContent={alignment}>
      <Box sx={messageStyle}>{renderMessageContent()}</Box>
    </Box>
  );
};

export default ChatMessage;
