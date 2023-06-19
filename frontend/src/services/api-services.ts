import apiClient from "./api-client";
import { Message } from "../components/ChatWindow";
import { CanceledError } from "axios";

export const sendMessage = async (message: Message) => {
  const controller = new AbortController();
  const payload = JSON.stringify(message);

  try {
    const response = await apiClient.post<Message>("", payload, {
      signal: controller.signal,
    });
    return response.data;
  } catch (error) {
    if (error instanceof CanceledError) {
      // Handle cancellation if needed
    }
    throw error;
  } finally {
    controller.abort();
  }
};
