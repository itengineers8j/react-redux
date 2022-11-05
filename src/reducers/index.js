import counterReducer from "./counterReducers";
import isloggedReducer from "./isloggedReducers";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    loggedInStatus: isloggedReducer
});

export default allReducers;