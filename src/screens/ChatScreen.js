import { View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from 'react-native'
import Message from '../components/Message'

import bg from '../../assets/images/BG.png'
import messages from '../../assets/dummy data/messages.json'
import InputBox from '../components/InputBox'

const ChatScreen = () => {
    return (
         // KeyboardAvoidingView is breaking the application for some reason, I cannot figure out why
        <ImageBackground source={bg} style={styles.bg}>
            <FlatList
                data={messages}
                renderItem={({ item }) => <Message message={item} />}
                style={styles.list}
            />
            <InputBox />
        </ImageBackground>
    )   
}

const styles = StyleSheet.create({
    bg: {
        flex: 1
    },
    list: {
        padding: 10
    }
});

export default ChatScreen