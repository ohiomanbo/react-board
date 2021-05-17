// 액션 정의
export const writeitem = () => ({ type: "WRITEITEM" });
export const removeitem = () => ({ type: "REMOVEITEM" });
export const data = (username) => ({ type: "setUserName", payload: username }); // payload에 data를 담도록 해서 initState에도 등록해주면, 다른 파일에서 함수 호출 할때 data 넘기기도 가능

// 초기 상태
const initState = [
  { id: 1, title: "제목1", content: "내용1" },
  { id: 2, title: "제목2", content: "내용2" },
  { id: 3, title: "제목3", content: "내용3" },
  { id: 4, title: "제목4", content: "내용4" },
];

// 리듀서 - 액션의 결과를 걸러내는 역할
const reducer = (state = initState, action) => {
  // action에 위에서 정의한 액션들이 담김
  switch (action.type) {
    case "INCREMENT":
      return { ...state, number: state.number + 1 }; // return이 되면 호출한 쪽에서 결과값을 받는게 아니라, return 되는 순간 자동으로 state가 바뀌면서 ui 변경이 됨
    case "DECREMENT":
      return { number: state.number - 1 }; // 여기서는 ...state 안했으니깐, 당연히 이름이 지워짐
    case "setUserName":
      return { ...state, username: action.payload }; // 받을 때 이름으로 접근하기
    default:
      return state;
  }
};

export default reducer;
