import { Card, CardBody, Text } from "@chakra-ui/react";
import React from "react";
import ChatMessage from "./ChatMessage";

const ChatWindow = () => {
  return (
    <Card borderRadius="md" boxShadow="md">
      <CardBody>
        <ChatMessage text="Test" type="sent"></ChatMessage>
        <ChatMessage text="Test2" type="received"></ChatMessage>
        <ChatMessage text="Test3" type="sent"></ChatMessage>
      </CardBody>
    </Card>
  );
};

export default ChatWindow;
