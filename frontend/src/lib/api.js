import { axiosInstance } from "./axios";

// Function to handle user signup.
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData); // send POST request to signup endpoint with signup data to backend.
  return response.data;
};

// Function to get authenticated user details.
export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null; // return null if there's an error (e.g., user not authenticated)
  }
};
// Function to complete onboarding process.
export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};

// Function to handle user login.
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

// Function to handle user logout.
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};
