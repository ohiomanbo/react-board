import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.scss";

// 리액트는 라우트를 안쓰면 최초 로딩때 받아야할 webpack이 많아서 오래걸림. a 태그를 쓰면 계속 다운로드 받음
// 메뉴 클릭해서 이동하도록 구현. <a> 태그는 전체를 새로 불러와서 안씀 -> Link
const style = { color: "red", fontWeight: "bold", margintTop: "0.5rem" };

//의미없이 감쌀 용도로 <div> 쓸때는 그냥 <> 로 써도 됨
// Nav.Link 통해서 이동하면 새롭게 렌더링함(페이지 왼쪽 상단에 돔) -> 테마 유지하려면 일반 Link쓰고 classname으로 nav-link를 주면 됨
// 다른 것도 navbar-brand 이런식으로 쓰면 됨
const Header = () => {
  return (
    <>
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      </>
      <div class="div_list">
        <ul>
          <Link class="home" to="/" style={style}>
            홈
          </Link>
          <hr />
          <Link to="/login/10">로그인</Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
