import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from 'react';
dayjs.extend(relativeTime)

// Takes chat data as input to generate a list item
const ChatListItem = function({ chat }) {
    const navigation = useNavigation()
    const [user, setUser] = useState(null)

    // Loop through chat.users.items to find a user that isn't the auth user
    useEffect(() => {
        const fetchUser = async () => {
            const authUser = await Auth.currentAuthenticatedUser();
            
            // Loop through chat.users.items to find a user that isn't the auth user
            const userItem = chat.users.items.find(
                (item) => item.user.id !== authUser.attributes.sub
            );
            setUser(userItem?.user);
        };
    
        fetchUser();
    }, []);

    return (
        // Main container
        <Pressable onPress={() =>
            navigation.navigate("Chat", { id: chat.id, name: user?.name })
            }
            style={styles.container}
        >
            {/* User profile picture */}
            <Image
                source={{ uri: user?.image }}
                style={styles.image}
            />
            {/* Content container */}
            <View style={styles.content}>
                {/* Row with name and time */}
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{user?.name}</Text>
                    <Text style={styles.subTitle}>{dayjs(chat.lastMessage?.createdAt).fromNow(true)}</Text>
                </View>

                {/* Row containing the most recent message */}
                <Text numberOfLines={2} style={styles.subTitle}>{chat.lastMessage?.text}</Text>
            </View>
        </Pressable>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Makes profile image and others side by side
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,  // 'borderRadius: 30' makes the icon circular
        marginRight: 10
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey'
    },
    row: {
        flexDirection: 'row',  // Makes name and time side by side
        marginBottom: 5
    },
    name: {
        flex: 1,
        fontWeight: 'bold'
    },
    subTitle: {
        color: 'grey'
    }
})

export default ChatListItem;