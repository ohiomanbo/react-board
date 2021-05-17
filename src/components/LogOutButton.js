import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { logOut } from '../api/auth';
import useAsync from '../common/customHook/useAsync';
import { setSignedInFlag } from '../modules/signedInFlag';

function LogOutButton({ history }) {
    
    const signedInFlag = useSelector(state => state.signedInFlag); //로그인/로그아웃 시 자동 리렌더링을 하기 위해 전역 상태를 참조만 함.
    const dispatch = useDispatch();
    const {state, run, initializeAsyncState} = useAsync(logOut, [], true);
    const {data: response, error} = state;
    if (response) {  
        localStorage.removeItem('isSignedIn');
        initializeAsyncState();
        dispatch(setSignedInFlag());
        history.push('/');
    }
    if (error) {
        console.log(error);
    }
    if (localStorage.getItem('isSignedIn')) {
        return (
            <Button onClick={run}>로그 아웃</Button>
        );
    } else {
        return null;
    }
}

export default withRouter(LogOutButton);