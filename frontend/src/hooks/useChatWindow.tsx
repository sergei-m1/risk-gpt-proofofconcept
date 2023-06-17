import { useEffect, useRef, useState } from "react";
import { Message } from "../components/ChatWindow";
import { sendMessage } from "../services/api-services";

const useChatWindow = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "received",
      text: "Hi, I am a Risk GPT Prototype model. I am here to answer your questions on topics of Finance and Risk. For more information please click on the 'About' section on your left side. You can close the side bar by pressing the chevron in the bottom left of the side bar. What can I help you with today?",
      sources: [],
      provideSources: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const handleSendMessage = async (text: string) => {
    setIsLoading(true);

    const newMessage: Message = {
      type: "sent",
      text,
      sources: [],
      provideSources: false,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    try {
      const response = await sendMessage(newMessage);
      const receivedMessage: Message = {
        type: response.type,
        text: response.text,
        sources: response.sources,
        provideSources: false,
      };
      console.log(receivedMessage);
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);

      const receivedSourcesMessage: Message = {
        type: response.type,
        text: response.text,
        sources: response.sources,
        provideSources: true,
      };
      console.log(receivedSourcesMessage);
      setMessages((prevMessages) => [...prevMessages, receivedSourcesMessage]);

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
