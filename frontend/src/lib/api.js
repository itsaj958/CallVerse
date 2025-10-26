import { axiosInstance } from "./axios";
// Function to handle user signup.
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};
