import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // send cookies with the request
});



// axios ka bahut simple sa kaam hai , ke abb jab bhi backend se api fetech karn hogi pura route likhna padta hai , http://localhost:5001/api/auth/.... , so abb humne ek base url set kar diya hai , ke jab bhi hum axiosInstance ka use karenge to ye base url automatically lag jayega , so hume sirf /auth/signup likhna hai , aur ye pura url ban jayega http://localhost:5001/api/auth/signup. 

// withCredentials: true , iska matlab hai ke jab bhi hum request bhejenge to cookies bhi bhejna hai , jese ke JWT token jo ke authentication k liye use hota hai.