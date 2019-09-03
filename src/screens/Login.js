import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { usernameChanged, loginUser } from '../actions';
import styles from '../styles/LoginStyles';

class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem('username');

        if (username != null) {
            const { navigation } = this.props;
            this.props.loginUser(navigation, username);
        }
    }

    continueClick() {
        const { navigation, username } = this.props;
        this.props.loginUser(navigation, username);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.text_field}
                    onChangeText={username => this.props.usernameChanged(username)}
                    value={this.props.username}
                    placeholder="Enter your username"
                />
                <Button onPress={this.continueClick.bind(this)} title="Continue" color="#0064e1" />
            </View>
        );
    }
}

const mapStateToProps = ({ LoginResponse }) => {
    const { username } = LoginResponse;
    return {
        username
    }
}

export default connect(mapStateToProps, { usernameChanged, loginUser })(Login);