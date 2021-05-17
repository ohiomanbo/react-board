import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INIT':
      return {
        loading: false,
        data: null,
        error: null,
      };
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const run = async (param) => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback(param);
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  const initializeAsyncState = () => {
    dispatch({ type: 'INIT' });
    console.log('initializeErrorState');
  };

  useEffect(() => {
    if (skip) return;
    run();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return { state: state, run: run, initializeAsyncState: initializeAsyncState };
}

export default useAsync;
