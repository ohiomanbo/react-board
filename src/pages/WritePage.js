import React from 'react';

const WritePage = ({ history, onWriteText, changeInput, input, resetForm }) => {
    console.log(history);
    const writeBtnClick = (e) => {
        e.preventDefault();
        onWriteText(input);
        resetForm();
        history.push('/board');
    };
    return (
        <div>
            <h1>aglagkljagklj</h1>
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
