import React, { useEffect, useState } from "react";
import Home from "../components/home/Home";

// Page는 이렇게 컴포넌트를 들고 있는 애를 Page라 명명함
const HomePage = () => {
  // HomePage에 요청 - http 요청(jquery ajax, js fetch, axios(서드파티 외부라이브러리)) 우리는 fetch나 axios 이용
  // 컴포넌트에 적지 말고 Page에서 요청하기 (꼭 이 컴포넌트에서 필요하다! 하면 거기에 작성 - 불필요한데 사용하면 컴포넌트 재사용되면 낭비)
  const [board, setBoards] = useState([
    { id: 0, title: "제목", content: "내용" },
  ]);

  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prev) => prev + 1);
  };

  const download = () => {
    return [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
      { id: 4, title: "제목4", content: "내용4" },
    ];
  };

  useEffect(() => {
    // 다운로드 받음, io 발생 -> block 발생.
    // 근데 fetch나 axios,ajax 같은거 쓰면 비동기로 가능함
    let datas = download();

    // 다운로드 완료 후 데이터가 들어가야지, 그 전에 들어가면 빈 데이터가 들어감
    // 다운로드 되면 콜백되서, 다시 데이터가 들어감 -> 밑에 props로 board를 전달하는 컴포넌트 리렌더링 됨

    setBoards([...board, ...datas]); // 기존 데이터 흩뿌리고, 받아온 데이터 배열이므로 요소 흩뿌리고 배열로 묶음

    return () => {
      //cleanup 마무리 함수
    };
  }, []); // 최초 한번만 실행 되도록 빈 배열

  // 이렇게 넘어간 data를 props라고 함. setBoards 같은 함수도 넘기기 가능
  // data flow는 부모 -> 자식이며, 자식 -> 부모는 불가능. => 리덕스 사용
  return (
    <div>
      <Home
        board={board}
        number={number}
        setBoards={setBoards}
        onIncrease={onIncrease}
      />
    </div>
  );
};

export default HomePage;
