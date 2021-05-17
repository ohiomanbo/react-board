import { axiosInstance } from "./axiosConfig";

export async function signIn(userInfo) {
  const response = await axiosInstance.post(
    'http://localhost:8080/auth/sign-in', userInfo
  );
  return response.data;
}

export async function signUp(userInfo) {
  const response = await axiosInstance.post(
    'http://localhost:8080/auth/sign-up', userInfo
  );
  return response.data;
} 

export async function refreshToken() {
  console.log("refreshToken");
  const response = await axiosInstance.post(
    'http://localhost:8080/auth/refresh-token');  
  return response.data;
}  

export async function logOut() {
  console.log("logOut api called!!");
  const response = await axiosInstance.post(
    'http://localhost:8080/member/log-out');  
  return response.data;
}  