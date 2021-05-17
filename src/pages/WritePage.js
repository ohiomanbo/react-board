import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { writeItem } from '../modules/boardForm';

const WritePage = ({ history}) => {

    let [input, setInput] = useState({
        boardId: '0',
        boardTitle: '',
        boardContent: '',
    });
    const dispatch = useDispatch();

    const onWriteText = (data) => dispatch(writeItem(data));

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
        
    const writeBtnClick = (e) => {
        e.preventDefault();
        onWriteText(input);
        resetForm();
        history.push('/board');
    };
    return (
        <div>
            <form onSubmit={writeBtnClick}>
                <div>
                    제목 :{' '}
                    <input
                        type="text"
                        name="boardTitle"
                        onChange={changeInput}
                        value={input.boardTitle}
                    />
                </div>
                <div>
                    내용 :{' '}
                    <input
                        type="text"
                        name="boardContent"
                        onChange={changeInput}
                        value={input.boardContent}
                    />
                </div>
                <input
                    type="hidden"
                    name="boardId"
                    onChange={changeInput}
                    value={input.boardId}
                />
                <button type="submit">글 작성</button>
            </form>
        </div>
    );

};

export default WritePage;
/*

console.log(history);
    const writeBtnClick = (e) => {
        e.preventDefault();
        onWriteText(input);
        resetForm();
        history.push('/board');
    };
    return (
        <div>
            <form onSubmit={writeBtnClick}>
                <div>
                    제목 :{' '}
                    <input
                        type="text"
                        name="boardTitle"
                        onChange={changeInput}
                        value={input.boardTitle}
                    />
                </div>
                <div>
                    내용 :{' '}
                    <input
                        type="text"
                        name="boardContent"
                        onChange={changeInput}
                        value={input.boardContent}
                    />
                </div>
                <input
                    type="hidden"
                    name="boardId"
                    onChange={changeInput}
                    value={input.boardId}
                />
                <button type="submit">글 작성</button>
            </form>
        </div>
    );
    */
