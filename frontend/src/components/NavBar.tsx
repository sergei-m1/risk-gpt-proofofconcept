import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import { SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";
// "gray.600"
const NavBar = () => {
  return (
    <HStack padding="15px" bg="gray.800">
      {/* <ColorModeSwitch /> */}
      <motion.div
        animate={{ rotate: 360 }} // Rotate the emblem 270 degrees
        transition={{ repeat: Infinity, duration: 20 }} // Repeat the rotation animation indefinitely with a duration of 2 seconds
      >
        <SiOpenai size={45} color="white" />
      </motion.div>
      <Text color="white" fontSize="2xl" fontWeight="bold" paddingX={6}>
        Risk GPT Prototype
      </Text>
    </HStack>
  );
};

export default NavBar;
