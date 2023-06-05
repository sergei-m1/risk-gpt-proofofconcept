import { useEffect, useRef, useState } from "react";
import { Message } from "../components/ChatWindow";
import { sendMessage } from "../services/api-services";

const useChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);

    const newMessage: Message = { type: "sent", text };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await sendMessage(newMessage);
      const receivedMessage: Message = {
        type: response.type,
        text: response.text,
      };
      console.log(receivedMessage);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("Unknown error"));
      }
      setIsLoading(false);
    }
  };

  // Scrolls the chat to the most recent message
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  return {
    messages,
    isLoading,
    error,
    handleSendMessage,
    messagesRef,
  };
};

export default useChatWindow;
