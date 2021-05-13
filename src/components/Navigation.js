//bootstrap 안씀
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/">글 목록</Link>
      </li>
      <li>
        <Link to="/write">글 쓰기</Link>
      </li>
    </ul>
  );
};

export default Navigation;
