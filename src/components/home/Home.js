import { Button } from "react-bootstrap";
import React from "react";

const Home = (props) => {
  console.log(props); // 처음에는 빈 데이터가 넘어오고, 그 후 데이터가 업데이트 되서 넘어옴

  const { board, number, setBoards, onIncrease } = props; // 구조 분해 할당. 넘겨줄 때 이름이랑 같은 이름 사용하면 자동으로 할당이 됨.

  //넘겨준 값에 따라 스타일링 가능. ex) 특정 값일때는 어떻게 뿌리기 등

  /*styled-component passing - 부모로부터 받아온 data를 가지고 스타일링 동적으로 할 때
    const StyledDeleteButoon = styled.button`
    color : ${(props) => props.user.usename === 'ssar'? 'blue' : 'red'}
    `
    해당 변수를 함수 바깥에서 작성하고 아래에서 태그 수정

    <StyleDeleteButoon user={user} onClick={()=>setBoards([])}

    부모로 부터 받는 경우가 아닐 때도 마찬가지

    const StyledHeadButtonderDiv = styled.div`
     border : 1px solid black;
     heigth : 300px;
     background-color: ${(props) => props.backgroundColor}
    `;

    <StyledHeadButtonderDiv backgroundColor = "blue"/>


    상속을 통해 재사용 가능

    const StyledFooterButtonderDiv = styled(StyledheadButtonderDiv)
    <StyledFooterButtonderDiv backgroundColor = "blue"/>

  */
  return (
    <div>
      <h1>홈페이지 : {number}</h1>
      <Button variant="primary">Primary</Button>{" "}
      <button onClick={onIncrease}>증가</button>
      <button onClick={() => setBoards([])}>전체 삭제</button>
      {board.map((item) => (
        <h3 key={board.id}>
          제목 : {item.title}, 내용 : {item.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
