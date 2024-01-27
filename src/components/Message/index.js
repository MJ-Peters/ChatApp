import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

const Message = ({ message }) => {
    const isMyMessage = () => {
        return message.user.id === 'u1'
    }

    return (
    <View style={[styles.container, {
        backgroundColor: isMyMessage() ? 'lightgreen' : 'white',
        alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
    }]}>
        <Text>{message.text}</Text>
        <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',

        shadowColor: '#000',
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 4,
    },
    time: {
        color: 'grey',
        alignSelf: 'flex-end'
    }
})
export default Message;