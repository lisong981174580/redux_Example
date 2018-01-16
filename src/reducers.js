import {combineReducers} from 'redux';
import {auth} from "./redux/auth.redux";
import {counter} from "./redux/index.redux";
export default combineReducers({auth,counter})