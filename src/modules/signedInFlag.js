/*
로그인 상태 여부 표시 관련 컴포넌트들의 리렌더링을 트리거 시켜주기 위한 리덕스 모듈 (전역 상태)
로그인, 로그 아웃시 관련 컴포넌트들만 따로 리렌더링 시키기 위함.
해당 상태를 사용하지 않고 참조만 함.
로그인/로그아웃 시 상태를 토글 -> 상태가 변경되었으므로 관련 상태를 보고있는 컴포넌트들 모두 리렌더링 -> 리렌더링 때는 local storage의 isSignedIn을 보고 렌더링
*/

/* 액션 타입 만들기 */
const SET_SIGNED_IN_FLAG = 'signedInFlag/SET_SIGNED_IN_FLAG';
/* 액션 생성함수 만들기 */
export const setSignedInFlag = () => ({ type: SET_SIGNED_IN_FLAG});
/* 초기 상태 선언 */
const initialState = true;
/* 리듀서 선언 */
export default function signedInFlag(state = initialState, action) {
  switch (action.type) {
    case SET_SIGNED_IN_FLAG:
      return !state;
    default:
      return state;
  }
}
