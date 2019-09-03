import { Alert } from 'react-native';
import { AsyncStorage } from 'react-native';
import { USERNAME_CHANGED, LOGIN_USER } from './Types';

export const usernameChanged = (username) => {
    return (dispatch) => {
        dispatch({
            type: USERNAME_CHANGED,
            payload: username
        });
    }
}

export const loginUser = (navigation, username) => {
    return (dispatch) => {
        if (username.length > 1) {
            dispatch({
                type: LOGIN_USER
            });
            AsyncStorage.setItem('username', username);
            navigation.navigate('Messages', { title: username });
        } else {
            Alert.alert('Warning', 'Username can not be less than 2 character.');
        }
    }
}