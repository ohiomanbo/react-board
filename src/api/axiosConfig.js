import axios from "axios";

export const axiosInstance = axios.create({
  baseUrl: "http://localhost:8080",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json; charset=utf-8";
    config.withCredentials = true;
    // config.headers["Authorization"] = (accessToken) ? "Bearer " + accessToken : "";
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config, response } = error;
    console.log("api response error!! " + error);
    console.log("api response error!! response: " + response.status);
    if (response.status === 401) {
      const originalRequest = config;
      //const refreshToken = await AsyncStorage.getItem("refreshToken");
      // token refresh 요청
      const response = await axios.post(
        "http://localhost:8080/auth/refresh-token",
        {},
        { withCredentials: true }
      );
      // axiosInstance.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
      // originalRequest.headers.Authorization = 'Bearer ' + accessToken;
      // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
      if (response.data.data) {
        return axios(originalRequest);
      } else {
        //로그아웃 된 상태(쿠키 없음)혹은 리프레시 토큰 만료된 상태에 뭔가 요청하는 경우
        localStorage.removeItem("isSignedIn");
        alert("로그인 해주세요.");
        window.location.replace("http://localhost:3000/sign-in"); //redirect to Home
      }
    }
    return Promise.reject(error);
  }
);
