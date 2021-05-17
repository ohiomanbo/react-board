import React from 'react';
import SignIn from '../components/SignIn';
import { isEmailValid, isPasswordValid } from '../common/utils/regExpUtils';
import {
  disableSignFormSubmitButton,
  onSignFormEmailChange,
  onSignFormPasswordChange,
} from '../modules/signForm';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../api/auth';
import useAsync from '../common/customHook/useAsync';
import { setSignedInFlag } from '../modules/signedInFlag';
function SignInContainer({ history }) {
  const {
    email,
    password,
    showEmailText,
    showPasswordText,
    disableSubmitButton,
  } = useSelector((state) => state.signForm);
  const dispatch = useDispatch();
  const { state, run, initializeAsyncState } = useAsync(signIn, [], true); // sign-in/up 모듈을 합치면서 로그인 버튼 클릭시 넘어가는 기능을 또 따로 모듈로 만들기 애매해서 custom hook으로 구현
  const { loading, data: response, error } = state;

  const checkSubmitPossible = ({ email, password }) => {
    dispatch(
      disableSignFormSubmitButton(
        !isEmailValid(email) || !isPasswordValid(password),
      ),
    );
  };
  const onEmailChange = (e) => {
    dispatch(onSignFormEmailChange(e));
    checkSubmitPossible({ email: e.target.value, password: password });
  };

  const onPasswordChange = (e) => {
    dispatch(onSignFormPasswordChange(e));
    checkSubmitPossible({ email: email, password: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email: email, password: password };
    console.log('onSubmit');
    run(userInfo);
  };

  if (error) {
    console.log(error);
    initializeAsyncState(); // 에러 값은 상태가 계속 남아있으므로, 리렌더링 시마다 if문이 돌면서 에러 로그 찍고, initail state로 바꿔줌
  }

  if (response) {
    if (response.data) {
      // 로그인 성공 시 로컬 스토리지에 로그인 했다는 정보 셋팅
      // 로그인 관련 상태 변경
      localStorage.setItem('isSignedIn', true);
      dispatch(setSignedInFlag());
      history.push('/');
    }
  }

  return (
    <SignIn
      onSubmit={onSubmit}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      disableSubmitButton={disableSubmitButton}
      showEmailText={showEmailText}
      showPasswordText={showPasswordText}
      isLoading={loading}
    />
  );
}

export default SignInContainer;
