import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import axios, { CanceledError } from "axios";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import apiClient from "../services/api-client";
import useChatWindow from "../hooks/useChatWindow";

export interface Message {
  type: "sent" | "received";
  text: string;
}

const ChatWindow = () => {
  const { messages, isLoading, error, handleSendMessage, messagesRef } =
    useChatWindow();

  return (
    <Card
      boxShadow="lg"
      height="100%"
      width="100%"
      overflowX="hidden"
      rounded="2xl"
    >
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
      <CardFooter mb={2} p={2}>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
