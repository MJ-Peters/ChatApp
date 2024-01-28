import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

// Takes chat data as input to generate a list item
const ContactListItem = ({ user }) => {
    const navigation = useNavigation()

    return (
        // Main container
        <Pressable onPress={() => {}} style={styles.container}>
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