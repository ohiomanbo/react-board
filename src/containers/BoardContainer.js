import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Board from '../components/Board';
import BoardNew from '../components/BoardNew';
import { boardSelectRow, deleteItem, writeItem } from '../modules/boardForm';
import WritePage from '../pages/WritePage';

function BoardContainer() {

    let [input, setInput] = useState({
        boardId: '0',
        boardTitle: '',
        boardContent: '',
    });

    const dispatch = useDispatch();

    const onWriteText = (data) => dispatch(writeItem(data));

    const onDeleteText = (boardId) => dispatch(deleteItem(boardId));

    const { selectRowData } = useSelector((state) => state.boardForm); // reducer state의 selectRowData filed 가져와 구독

    // 함수 매핑
    const onRowClick = (boardId) => {
        console.log(selectRowData);
        dispatch(boardSelectRow(boardId));

        if (JSON.stringify(selectRowData) !== '{}') {
            setInput({
                boardId: selectRowData.boardId,
                boardTitle: selectRowData.boardTitle,
                boardContent: selectRowData.boardContent,
            });
        }
    };

    const changeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const resetForm = () => {
        setInput({
            boardId: '0',
            boardTitle: '',
            boardContent: '',
        });
    };

    const { boards } = useSelector((state) => state.boardForm); // reducer state의 boards filed를 가져온뒤 subscribe

    return ( // 
        <div>
            <div>
                <table className="boardList">
                    <tbody>
                        <tr align="center">
                            <td width="150">번호</td>
                            <td width="150">제목</td>
                            <td width="200">내용</td>
                        </tr>

                        {boards.map((row) => (
                            <Board
                                key={row.boardId}
                                boardId={row.boardId}
                                boardTitle={row.boardTitle}
                                boardContent={row.boardContent}
                                onRemove={onDeleteText}
                                onRowClick={onRowClick}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <BoardNew
                    onSave={onWriteText}
                    changeInput={changeInput}
                    inputData={input}
                    resetForm={resetForm}
                />
            </div>
            <ul>
                <li>
                    <Link to="/board/write">글쓰기</Link>
                </li>
            </ul>
            
        </div>
    );
}

export default BoardContainer;
