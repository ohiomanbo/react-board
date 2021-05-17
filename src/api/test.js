import { axiosInstance } from "./axiosConfig";

export async function test() {
  const response = await axiosInstance.get(
    'http://localhost:8080/member/test');
  return response.data;
}