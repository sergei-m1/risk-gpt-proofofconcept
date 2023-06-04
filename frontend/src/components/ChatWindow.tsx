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
import useMessages from "../hooks/useMessages";
import apiClient from "../services/api-client";

export interface Message {
  type: "sent" | "received";
  text: string;
}

const ChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async (text: string) => {
    const newMessage: Message = { type: "sent", text };
    setMessages([...messages, newMessage]);

    const controller = new AbortController();

    const data = { text: text };
    axios
      .post<Message[]>("http://127.0.0.1:5000/api", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const responseData: Message = res.data;
        const receivedMessage: Message = {
          type: responseData.type,
          text: responseData.text,
        };
        console.log(receivedMessage);
        setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      })
      .catch((err) => {
        console.error(err);
      });

    // try {
    //   const response = await fetchMessages(text);
    //   const responseData: Message = response.data;
    //   const receivedMessage: Message = {
    //     type: responseData.type,
    //     text: responseData.text,
    //   };
    //   setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

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
        <ChatInput onSendMessage={handleSendMessage} />
      </CardFooter>
    </Card>
  );
};

export default ChatWindow;
