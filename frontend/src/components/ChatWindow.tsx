import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

export interface Message {
  type: "sent" | "received";
  text: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = { type: "sent", text };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Card height="100%" width="100%">
      <CardBody
        flex="1"
        overflowY="auto"
        // This hides the scroll bar while preserving the functionality
        css={{
          "&::-webkit-scrollbar": { width: "0.4em" },
          "&::-webkit-scrollbar-track": { background: "transparent" },
          "&::-webkit-scrollbar-thumb": { background: "transparent" },
        }}
        ref={messagesRef}
      >
        {messages.map((message, index) => (
          <ChatMessage key={index} type={message.type} text={message.text} />
        ))}
      </CardBody>
      <Divider
        marginBottom={1}
        borderColor="gray.400"
        borderWidth={1}
        opacity={0.8}
      />
      <CardFooter bg="gray.200" p={2}>
        <ChatInput onSendMessage={handleSendMessage} />
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
