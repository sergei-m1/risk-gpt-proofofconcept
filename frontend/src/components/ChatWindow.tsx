import { Card, CardBody, Text } from "@chakra-ui/react";
import React, { useState } from "react";
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
    <Card borderRadius={10} boxShadow="md">
      <CardBody>
        {messages.map((message, index) => (
          <ChatMessage key={index} type={message.type} text={message.text} />
        ))}
        <ChatInput onSendMessage={handleSendMessage} />
      </CardBody>
    </Card>
  );
};

export default ChatWindow;
