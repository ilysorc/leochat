import React from 'react';
import {
    Text,
    View,
    ScrollView,
    FlatList,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { updateChatMessage, sendChatMessage, getChatMessages } from '../actions';
import styles from '../styles/MessagesStyles';

console.disableYellowBox = true;

class Messages extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`
    });

    componentDidMount() {
        this.props.getChatMessages();
    }

    sendClick() {
        const { message } = this.props;
        var username = this.props.navigation.state.params.title;
        this.props.sendChatMessage(message, username);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.body}>
                    <ScrollView
                        style={styles.messages}
                        contentContainerStyle={styles.scroll_container}
                        ref={ref => this.scrollView = ref}
                        onContentSizeChange={(contentWidth, contentHeight) => {
                            this.scrollView.scrollToEnd({ animated: true });
                        }}>
                        <FlatList data={this.props.messages} renderItem={this.renderItem} />
                    </ScrollView>

                    <View style={styles.message_box}>
                        <TextInput
                            style={styles.text_field}
                            multiline={true}
                            onChangeText={message => this.props.updateChatMessage(message)}
                            value={this.props.message}
                            placeholder="Type your message..."
                        />

                        <View style={styles.button_container}>
                            <TouchableOpacity onPress={this.sendClick.bind(this)}>
                                <View style={styles.send_button}>
                                    <Text style={styles.send_button_text}>Send</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }

    renderItem = ({ item }) => {
        let box_style = item.user.name == this.props.navigation.state.params.title ? 'current_user_msg' : 'other_user_msg';
        let username_style = item.user.name == this.props.navigation.state.params.title
            ? 'current_user_username'
            : 'other_user_username';

        return (
            <View key={item.id} style={styles.msg}>
                <View style={styles.msg_wrapper}>
                    <View style={styles.username}>
                        <Text style={[styles.username_text, styles[username_style]]}>
                            <Image
                                source={{ uri: item.user.avatarUrl }}
                                style={{ width: 32, height: 32, borderRadius: 32 / 2 }}
                            />
                            {item.user.name}
                        </Text>
                    </View>
                    <View style={[styles.msg_body, styles[box_style]]}>
                        <Text style={styles[`${box_style}_text`]}>
                            {item.text}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };
}

const mapStateToProps = ({ MessageResponse }) => {
    const { messages, message, username } = MessageResponse;
    return {
        messages,
        message,
        username
    }
}

export default connect(mapStateToProps, { updateChatMessage, sendChatMessage, getChatMessages })(Messages);