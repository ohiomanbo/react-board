import React from "react";
import Login from "../components/login/Login";

const LoginPage = (props) => {
  const { history } = props; // 구조 분해 const history = props.history; 와 같음
  console.log("LoginPage", props); // history, match, location, staticContext이 넘겨져옴. history로 이동, match는 param이나 path(rul), location은 정보
  console.log(props.match.params.id);

  return (
    <div>
      <button onClick={() => history.goBack()}>뒤로가기</button>
      <button onClick={() => history.push("/")}>홈으로</button>
      <Login />
    </div>
  );
};

export default LoginPage;

// page는 컴포넌트들의 조합
// App 상태가 바뀌어서 LoginPage의 Header만 변경시키면 된다면?
// Header 안에 자식으로 들어가 있는 컴포넌트는 답이 없지만, 나뉘어져 있으면 변경 없는 곳은 안그리게 할 수 있음
