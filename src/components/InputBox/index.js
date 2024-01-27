import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'

const InputBox = () => {
    const [newMessage, setNewMessage] = useState("")

    const onSend = () => {
        console.warn("Sending a new message: ", newMessage)
        setNewMessage("")  // Reset the state variable
    }

  return (
    <View style={styles.container}>
        {/* Additional Media Icon */}
        <AntDesign name="pluscircle" size={24} color="royalblue" />

        {/* Text Input */}
        <TextInput 
            value={newMessage}  // Get the state variable
            onChangeText={setNewMessage}  // Set the state variable
            style={styles.input} 
            placeholder="Type your message..."
        />

        {/* Send Icon */}
        <MaterialCommunityIcons
            onPress={onSend}
            style={styles.send}
            name="send-circle"
            size={30}
            color="royalblue"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "whitesmoke",
        padding: 5,
        paddingHorizontal: 10,
        alignItems: "center"
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 5,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        borderRadius: 50,
        borderColor: "lightgrey",
        borderWidth: StyleSheet.hairlineWidth
    },
    send: {

    }
})

export default InputBox