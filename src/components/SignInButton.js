import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SignInButton() {
  const signedInFlag = useSelector((state) => state.signedInFlag); //로그인/로그아웃 시 자동 리렌더링을 하기 위해 전역 상태를 참조만 함.
  if (localStorage.getItem('isSignedIn'))
    return (
      <Link to="/sign-in" className="nav-link">
        마이 페이지
      </Link>
    );
  else
    return (
      <Link to="/sign-in" className="nav-link">
        로그인
      </Link>
    );
}

export default SignInButton;
