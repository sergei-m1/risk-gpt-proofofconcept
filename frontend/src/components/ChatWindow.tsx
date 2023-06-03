import {
  Box,
  Card,
  CardBody,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

//defining the interface for messages
export interface Message {
  type: "sent" | "received";
  text: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = { type: "sent", text };
    setMessages([...messages, newMessage]);
  };

  return (
    <Card borderRadius={10} boxShadow="md" height="100%">
      <CardBody display="flex" flexDirection="column">
        <Box flex="1" overflowY="auto" padding={4}>
          {messages.map((message, index) => (
            <ChatMessage key={index} type={message.type} text={message.text} />
          ))}
        </Box>
        <Box marginY={4}>
          <ChatInput onSendMessage={handleSendMessage} />
        </Box>
      </CardBody>
    </Card>
  );
};

export default ChatWindow;
