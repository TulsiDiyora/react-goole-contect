import { combineReducers } from 'redux';
import gooleRedux from './gooleRedux.js';
import loginRedux from './loginRedux.js';

const mainRedux = combineReducers({
    gooleRedux,
    loginRedux
});

export default mainRedux