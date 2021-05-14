import React from "react";
import { useDispatch } from "react-redux";
import "../../App.scss";
import { data, decrease, increase } from "../../store";

const Bottom = () => {
  const dispatcher = useDispatch();

  return (
    <div className="sub_container">
      <h1>Bottom</h1>
      <button onClick={() => dispatcher(increase())}>증가</button>
      <button onClick={() => dispatcher(decrease())}>감소</button>
      <button onClick={() => dispatcher(data("kch"))}>이름변경</button>
    </div>
  );
};

export default Bottom;
