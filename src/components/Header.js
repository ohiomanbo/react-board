import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";
import LogOutButton from "./LogOutButton";
import { test } from "../api/test";

function Header() {
  console.log("header rendering");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          홈
        </Link>
        <Nav className="mr-auto">
          <SignInButton />
          <Link to="/sign-up" className="nav-link">
            회원가입
          </Link>
          <Link to="/board" className="nav-link">
            게시판
          </Link>
          <LogOutButton />
          <Button onClick={test}>테스트</Button>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
