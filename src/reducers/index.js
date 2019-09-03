import { combineReducers } from 'redux';
import LoginReducers from './LoginReducers';
import MessageReducers from './MessageReducers';

export default combineReducers({
    LoginResponse: LoginReducers,
    MessageResponse: MessageReducers
});