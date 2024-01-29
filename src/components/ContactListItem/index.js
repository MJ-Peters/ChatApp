import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createChatRoom, createUserChatRoom } from "../../graphql/mutations"
import { getCommonChatRoomWithUser } from "../../services/chatRoomService"

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

// Takes chat data as input to generate a list item
const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    const onPress = async () => {
        // Check for an existing chatroom with selected user, exit if does
        const existingChatRoom = await getCommonChatRoomWithUser(user.id);
        if (existingChatRoom) {
            navigation.navigate("Chat", { id: existingChatRoom.id });
        return;
        }

        // Create a new chatroom
        const newChatRoomData = await API.graphql(
            graphqlOperation(createChatRoom, { input: {} })
        );
        //console.log(newChatRoomData);
        if (!newChatRoomData.data?.createChatRoom) {
            console.log("Error creating the chat error");
        }
        const newChatRoom = newChatRoomData.data?.createChatRoom;

        // Add selected contact to the chatroom
        await API.graphql(
            graphqlOperation(createUserChatRoom, {
              input: { chatRoomId: newChatRoom.id, userId: user.id },
            })
        );

        // Add the auth user to the chatroom
        const authUser = await Auth.currentAuthenticatedUser();
        await API.graphql(
            graphqlOperation(createUserChatRoom, {
                input: { chatRoomId: newChatRoom.id, userId: authUser.attributes.sub },
            })
        );

        // Auto navigate to the new chatroom
        navigation.navigate("Chat", { id: newChatRoom.id });
    };

    return (
        // Main container
        <Pressable onPress={onPress} style={styles.container}>
            {/* User profile picture */}            
            <Image
                source={{ uri: user.image }}
                style={styles.image}
            />
            <View style={styles.content}>
                <Text numberOfLines={1} style={styles.name}>
                    {user.name}
                </Text>
                <Text numberOfLines={2} style={styles.subTitle}>
                    {user.status}
                </Text>
            </View>
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Makes profile image and others side by side
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
        alignItems: "center"
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,  // 'borderRadius: 30' makes the icon circular
        marginRight: 10
    },
    name: {
        fontWeight: 'bold'
    },
    content: {
        flex: 1
    },
    subTitle: {
        color: "grey"
    }
})

export default ContactListItem;