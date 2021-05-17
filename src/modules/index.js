import { combineReducers } from 'redux';
import signForm from './signForm';
import signedInFlag from './signedInFlag';
import boardForm from './boardForm';

const rootReducer = combineReducers({ signForm, signedInFlag, boardForm });

export default rootReducer;
