import React from 'react';
import BoardContainer from '../containers/BoardContainer';

const BoardPage = () => {
    return (
        <div
            className="content"
            style={{
                position: 'absolute',
                left: '20%',
                top: '20%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <BoardContainer />
        </div>
    );
};

export default BoardPage;
