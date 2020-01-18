import { combineReducers } from 'redux'
import counter from './counter';
import login from './login'

let combinedReducer = combineReducers({counter,login});

export default combinedReducer;
