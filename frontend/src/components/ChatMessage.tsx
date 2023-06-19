import { Box, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
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

  // fontSize="sm" fontStyle="italic" color="gray.500"

  const renderMessageContent = () => {
    if (provideSources && sources && sources.length > 0) {
      return (
        <>
          <Text>To answer your question I used the following sources:</Text>
          <UnorderedList>
            {sources.map((source, index) => (
              <ListItem key={index}>
                <Link href={source} isExternal>
                  {source}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
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
