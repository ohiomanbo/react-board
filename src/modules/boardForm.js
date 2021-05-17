// 액션 타입
const WRITEITEM = 'WRITEITEM';
const DELETEITEM = 'DELETEITEM';
const MODE_SELECT_ROW = 'SELECT_ROW';

// 액션 생성 함수
export const writeItem = (data) => ({
  type: WRITEITEM,
  data: {
    boardId: data.boardId,
    boardTitle: data.boardTitle,
    boardContent: data.boardContent,
  },
});
export const deleteItem = (boardId) => ({ type: DELETEITEM, boardId: boardId });
export const boardSelectRow = (boardId) => ({
  type: MODE_SELECT_ROW,
  boardId: boardId,
});

// 초기 상태
const initState = {
  boards: [
    {
      boardId: 1,
      boardTitle: '제목1',
      boardContent: '내용내용내용1',
    },
    {
      boardId: 2,
      boardTitle: '제목2',
      boardContent: '내용내용내용2',
    },
    {
      boardId: 3,
      boardTitle: '제목3',
      boardContent: '내용내용내용3',
    },
  ],
  lastId: 3,
  selectRowData: {},
};

// 리듀서 - 액션의 결과를 걸러내는 역할
const boardForm = (state = initState, action) => {
  switch (action.type) {
    case WRITEITEM:
      if (action.boardId === '') {
        // boardItem이 없다면 신규 데이터 저장
        return {
          lastId: state.lastId + 1,
          boards: state.boards.concat({
            ...action.data,
            boardId: state.lastId + 1,
          }),
          selectRowData: {},
        };
      } else {
        // boardId가 있으면 기존 데이터 수정
        return {
          ...state,
          boards: state.boards.map((item) =>
            item.boardId === action.data.boardId ? { ...action.data } : item,
          ),
          selectRowData: {},
        };
      }
    case DELETEITEM:
      return {
        ...state,
        boards: state.boards.filter((item) => item.boardId !== action.boardId),
      };
    case MODE_SELECT_ROW:
      return {
        // 클릭한 셀의 boardId 를 가진 state 만 찾아서 return
        ...state,
        selectRowData: state.boards.find(
          (item) => item.boardId === action.boardId,
        ),
      };
    default:
      return state;
  }
};

export default boardForm;
