import { Route } from "react-router";
import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import ListPage from "./pages/board/ListPage";
import WritePage from "./pages/board/WritePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// useRef (디자인)
// dom 변경할 때 사용

/* a는 내부에서 쓸 수 있는 스타일. 디자인을 만들때는 함수 안에 만들면 안됨(디자인은 정적이므로). 내부에서 쓰는 것 보다는 css 파일을 사용하는 것을 추천.
const a = {
  backgroundColor: "red",
};
*/

/* JS
let T = document.createElement("h1")
T.style.color = 'red';
*/

/* components-styled - js안에 코드가 들어옴. css파일이 필요 없음 -> js 파일 하나 만들어서 export 해주면 어디서든 사용 가능
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioetred;
`;
<Title>헬로</Title>
*/

//모든 페이지에 header,footer가 있다고 가정했으므로 Route 바깥에 작성
// 라우터는 SPA로 페이지는 하나에, 내용물(객체)를 바꿔치기함
function App() {
  aaaaaaa;
  return (
    <div>
      <Navigation />
      <Route path="/" exact component={ListPage} />
      <Route path="/write" exact component={WritePage} />
      <Footer />
    </div>
  );
}
// /logn/:id에 있는 id의 값을 로그인 페이지에서 match.params로 받기 가능
export default App;
