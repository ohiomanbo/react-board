import "./App.scss";
import Bottom from "./components/Nav/Bottom";
import Top from "./components/Nav/Top";

//모든 페이지에 header,footer가 있다고 가정했으므로 Route 바깥에 작성
// 라우터는 SPA로 페이지는 하나에, 내용물(객체)를 바꿔치기함
function App() {
  return (
    <div className="container">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
    </div>
  );
}
// /logn/:id에 있는 id의 값을 로그인 페이지에서 match.params로 받기 가능
export default App;
