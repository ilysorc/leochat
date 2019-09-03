import { UPDATE_CHAT_MESSAGE, SEND_CHAT_MESSAGE, GET_CHAT_MESSAGES } from '../actions/Types';

const INITIAL_STATE = {
    messages: [],
    message: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_CHAT_MESSAGES:
            return { ...state, messages: action.payload };
        case UPDATE_CHAT_MESSAGE:
            return { ...state, message: action.payload };
        case SEND_CHAT_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] };
        default:
            return { ...state };
    }
}