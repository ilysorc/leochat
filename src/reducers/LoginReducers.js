import { USERNAME_CHANGED, LOGIN_USER } from '../actions/Types';

const INITIAL_STATE = {
    username: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            return { ...state, username: action.payload };
        case LOGIN_USER:
            return { ...state };
        default:
            return { ...state };
    }
}