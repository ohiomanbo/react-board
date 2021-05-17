import React from 'react';
import SignUp from '../components/SignUp';
import { isEmailValid, isPasswordValid } from '../common/utils/regExpUtils';
import {
  onSignFormEmailChange,
  onSignFormPasswordChange,
  onSignFormPasswordCheckChange,
  disableSignFormSubmitButton,
  isPasswordSame,
} from '../modules/signForm';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../api/auth';
import useAsync from '../common/customHook/useAsync';
/*
Container Component
state 관리, presentational component에 prop 넘겨서 UI 구성하게끔 함.
*/
function SignUpContainer(props) {
  const {
    email,
    password,
    passwordCheck,
    showEmailText,
    showPasswordText,
    passwordCheckText,
    disableSubmitButton,
  } = useSelector((state) => state.signForm);
  const dispatch = useDispatch();
  const { state, run, initializeAsyncState } = useAsync(signUp, [], true);
  const { loading, error } = state;

  const checkSubmitPossible = ({ email, password, passwordCheck }) => {
    dispatch(
      disableSignFormSubmitButton(
        !isEmailValid(email) ||
          !isPasswordValid(password) ||
          !isPasswordSame(password, passwordCheck),
      ),
    );
  };
  const onEmailChange = (e) => {
    dispatch(onSignFormEmailChange(e));
    checkSubmitPossible({
      email: e.target.value,
      password: password,
      passwordCheck: passwordCheck,
    });
  };

  const onPasswordChange = (e) => {
    dispatch(onSignFormPasswordChange(e));
    checkSubmitPossible({
      email: email,
      password: e.target.value,
      passwordCheck: passwordCheck,
    });
  };

  const onPasswordCheckChange = (e) => {
    dispatch(onSignFormPasswordCheckChange(e));
    checkSubmitPossible({
      email: email,
      password: password,
      passwordCheck: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email: email, password: password };
    console.log('onSubmit');
    console.log(userInfo);
    run(userInfo);
  };

  if (error) {
    alert(error);
    initializeAsyncState();
  }

  return (
    <SignUp
      onSubmit={onSubmit}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onPasswordCheckChange={onPasswordCheckChange}
      showEmailText={showEmailText}
      showPasswordText={showPasswordText}
      passwordCheckText={passwordCheckText}
      disableSubmitButton={disableSubmitButton}
      isLoading={loading}
    />
  );
}

export default SignUpContainer;
