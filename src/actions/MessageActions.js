import { Alert } from 'react-native';
import { UPDATE_CHAT_MESSAGE, SEND_CHAT_MESSAGE, GET_CHAT_MESSAGES } from './Types';

export const updateChatMessage = (message) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_CHAT_MESSAGE,
            payload: message
        });
    }
}

export const getChatMessages = () => {
    return (dispatch) => {
        fetch('https://jsonblob.com/api/jsonBlob/4f421a10-5c4d-11e9-8840-0b16defc864d')
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: GET_CHAT_MESSAGES,
                    payload: responseJson
                });
            });
    }
}

export const sendChatMessage = (message, username) => {
    return (dispatch) => {
        if (message.length > 0) {

            const messageObject = {
                "id": 0,
                "user":
                {
                    "id": 0,
                    "name": username,
                    "avatarUrl": "https://pbs.twimg.com/profile_images/1099856449918943232/hKv3Fddh.jpg"
                },
                "text": message,
                "timestamp": new Date().getTime()
            };

            dispatch({
                type: UPDATE_CHAT_MESSAGE,
                payload: ''
            });

            dispatch({
                type: SEND_CHAT_MESSAGE,
                payload: messageObject
            });
        } else {
            Alert.alert('Warning', 'Message can not be less than 1 character.');
        }
    }
}