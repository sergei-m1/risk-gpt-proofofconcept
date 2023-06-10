import React, { FormEvent, useEffect, useRef } from "react";
import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormControl,
  Flex,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { BsSend } from "react-icons/bs";

interface Props {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: Props) => {
  const currentMessageRef = useRef<HTMLTextAreaElement>(null);
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
      currentMessageRef.current!.rows = 1; // Reset the number of rows displayed in the input box back to 1
    }
  };

  // This function defines what happens when the user presses the enter and shift keys together
  // For just enter send the message
  // For enter and shift add a new line to the Box up until 5 lines are displayed
  const handleInputKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      //  prevents the default behavior of the Enter key, which is to add a new line.
      event.preventDefault();
      const formElement = event.currentTarget.closest("form"); // take the closest ancestor <form> of <Textarea>
      if (formElement instanceof HTMLFormElement) {
        handleSendMessage(new Event("submit", { cancelable: true }) as any);
      }
    } else if (event.key === "Enter" && event.shiftKey) {
      if (currentMessageRef.current!.rows < 5) {
        currentMessageRef.current!.rows += 1;
      }
    }
  };

  return (
    <Flex justify="center" flex="1">
      <form onSubmit={handleSendMessage} style={{ width: "90%" }}>
        <FormControl>
          <InputGroup>
            <Textarea
              placeholder="Type your message..."
              pr="4.5rem"
              borderRadius={16}
              ref={currentMessageRef}
              disabled={isLoading}
              resize="none"
              rows={1}
              onKeyDown={handleInputKeyDown}
              // making scroll bar invisible
              css={{ "&::-webkit-scrollbar": { width: "0.4em" } }}
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

// This fixes it.

// I also observed the following behaviour:
// - When I press shift+enter in the textarea component a new line is added.
