import React, { FormEvent, useRef } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  HStack,
  Text,
} from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";

interface Props {
  onSendMessage: (text: string) => void;
}

const ChatInput = ({ onSendMessage }: Props) => {
  const currentMessageRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // assigning the current non-null value of ref
    const message = currentMessageRef.current?.value;

    // if message exists and not empty then call onSendMessage
    // set the input field to an empty string.  ! is used to assure TypeScript that messageRef.current is not null or undefined
    if (message && message.trim() !== "") {
      onSendMessage(message);
      currentMessageRef.current!.value = "";
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <FormControl>
        <InputGroup>
          <Input placeholder="Type your message..." ref={currentMessageRef} />
          <InputRightElement width="4.5rem">
            <Button type="submit" colorScheme="telegram">
              <HStack>
                <Text>Send</Text>
                <BsSend />
              </HStack>
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </form>
  );
};

export default ChatInput;
