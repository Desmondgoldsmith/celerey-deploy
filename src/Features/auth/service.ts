import apiClient from "../../lib/axios"; // Reuse Axios instance
import { AuthResponse } from "./types";

export const validateOTP = async (email: string, otp: string): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/validate-otp", {
    email,
    otp,
  });
  return response.data;
};

export const sendOTP = async (email: string): Promise<AuthResponse> => {
  const response = await apiClient.post("/auth/send-otp", {
    email,
  });
  return response.data;
};
