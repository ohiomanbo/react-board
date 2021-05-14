import React from "react";
import { useSelector } from "react-redux";
import "../../App.scss";

const Top = () => {
  // store.js 에 있는 리듀서의 state(initState)에서 꺼내옴
  const { number, username } = useSelector((store) => store); // 구조 분해 할당

  return (
    <div className="sub_container">
      <h1>Top</h1>
      이름 : {username}
      번호 : {number}
    </div>
  );
};

export default Top;
