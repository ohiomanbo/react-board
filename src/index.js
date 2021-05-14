import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import reducer from "./store";
import { Provider } from "react-redux";

const store = createStore(reducer);

// 라우팅 하기 위해서 BrowserRouter로 감쌈
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") // 어디에 그릴지 정하는 것. public에서 inex.html에서 root란걸 찾음. 결국 열리는 파일은 index.html이고 index.js가 <App/>의 리턴 값을 렌더하는 것
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
