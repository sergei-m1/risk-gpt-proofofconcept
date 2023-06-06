import React, { FormEvent, useEffect, useRef } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  Flex,
  Spinner,
} from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";

interface Props {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: Props) => {
  const currentMessageRef = useRef<HTMLInputElement>(null);

  // make sure that the cursor stay within the input form after isLoading is set back to false
  useEffect(() => {
    if (currentMessageRef.current && !isLoading) {
      // Focus the input when form is enabled. Focus puts the cursor inside of the element
      currentMessageRef.current.focus();
    }
  }, [isLoading]);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) {
      return; // If isLoading is true, do not send the message
    }

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
    <Flex justify="center" flex="1">
      <form onSubmit={handleSendMessage} style={{ width: "90%" }}>
        <FormControl>
          <InputGroup>
            <Input
              placeholder="Type your message..."
              pr="4.5rem"
              borderRadius={16}
              ref={currentMessageRef}
              disabled={isLoading}
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.8rem"
                w="2.5rem"
                type="submit"
                size="sm"
                colorScheme="telegram"
              >
                {isLoading ? (
                  <Spinner
                    size="sm"
                    speed="0.7s"
                    emptyColor="gray.400"
                    color="white"
                  />
                ) : (
                  <BsSend />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </form>
    </Flex>
  );
};

export default ChatInput;
