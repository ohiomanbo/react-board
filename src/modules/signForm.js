import { isEmailValid, isPasswordValid } from "../common/utils/regExpUtils";

// 액션 타입
const EMAIL = 'EMAIL';
const PASSWORD = 'PASSWORD';
const PASSWORD_CHECK = 'PASSWORD_CHECK';
const SHOW_EMAIL_TEXT = 'SHOW_EMAIL_TEXT';
const SHOW_PASSWORD_TEXT = 'SHOW_PASSWORD_TEXT';
const PASSWORD_CHECK_TEXT = 'PASSWORD_CHECK_TEXT';
const DISABLE_SUBMIT_BUTTON = 'DISABLE_SUBMIT_BUTTON';

// 액션 생성 함수
export const email = (email) => ({ type: EMAIL, data: email});
export const password = (password) => ({ type: PASSWORD, data: password });
export const passwordCheck = (passwordCheck) => ({ type: PASSWORD_CHECK, data: passwordCheck });
export const showEmailText = (enable) => ({ type: SHOW_EMAIL_TEXT, data: enable });
export const showPasswordText = (enable) => ({ type: SHOW_PASSWORD_TEXT, data: enable });
export const passwordCheckText = (passwordCheckText) => ({ type: PASSWORD_CHECK_TEXT, data: passwordCheckText });
export const disableSubmitButton = (disable) => ({ type: DISABLE_SUBMIT_BUTTON, data: disable });

// 일반 함수
export const isPasswordSame = (password, passwordCheck) => {
  return password === passwordCheck;
};

//thunk 함수
export const onSignFormEmailChange = (e) => dispatch => {
  const emailValue = e.target.value
  dispatch(email(emailValue));
  if (isEmailValid(emailValue)) {
    dispatch(showEmailText(false));
  } else {
    dispatch(showEmailText(true));
  }
};

export const onSignFormPasswordChange = (e) => (dispatch, getState) => {
  const passwordValue = e.target.value
  const passwordCheckValue = getState().signForm.passwordCheck
  dispatch(password(passwordValue));
  if (isPasswordValid(passwordValue)) {
    dispatch(showPasswordText(false));
  } else {
    dispatch(showPasswordText(true));
  }  
  if (isPasswordSame(passwordValue, passwordCheckValue)) {
    dispatch(passwordCheckText("패스워드가 일치합니다."));
  } else {
    dispatch(passwordCheckText("패스워드가 일치하지 않습니다."));
  }
};
export const onSignFormPasswordCheckChange = (e) => (dispatch, getState) => { 
  const passwordCheckValue = e.target.value;
  const passwordValue = getState().signForm.password;
  dispatch(passwordCheck(passwordCheckValue));
  if (isPasswordSame(passwordValue, passwordCheckValue)) {
    dispatch(passwordCheckText("패스워드가 일치합니다."));
  } else {
    dispatch(passwordCheckText("패스워드가 일치하지 않습니다."));
  }
};

export const disableSignFormSubmitButton = (disable) => dispatch => {
  dispatch(disableSubmitButton(disable));
}

// 초깃값 (상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = {
    email:"",
    password:"",
    passwordCheck:"",
    passwordCheckText:"",
    showEmailText:false,
    showPasswordText:false,
    disableSubmitButton:true
}

//reducer
export default function signForm(state = initialState, action) {
  switch (action.type) {
    case EMAIL:
      return {
        ...state,
        email:action.data    
      }
    case PASSWORD:
      return {
        ...state,
        password:action.data    
      }
    case PASSWORD_CHECK:
      return {
        ...state,
        passwordCheck:action.data    
      }
    case SHOW_EMAIL_TEXT:
      return {
        ...state,
        showEmailText:action.data    
      }
    case SHOW_PASSWORD_TEXT:
      return {
        ...state,
        showPasswordText:action.data    
      }
    case PASSWORD_CHECK_TEXT:
      return {
        ...state,
        passwordCheckText:action.data    
      }
    case DISABLE_SUBMIT_BUTTON:
      return {
        ...state,
        disableSubmitButton:action.data    
      }
    default:
      return state;
  }
}
