import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = function() {
    return (
        /* Main container */
        <View style={styles.container}>
            {/* User profile picture */}
            <Image
                source={{ uri: 'https://backend.artreview.com/wp-content/uploads/2021/11/square-Mark-Zuckerberg_Courtesy-Facebook.jpg' }}
                style={styles.image}
            />
            {/* Content container */}
            <View style={styles.content}>
                {/* Row with name and time */}
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>Mark</Text>
                    <Text style={styles.subTitle}>8:30</Text>
                </View>

                {/* Row containing the most recent message */}
                <Text numberOfLines={2} style={styles.subTitle}>Hello World</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', /* Makes profile image and others side by side */
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 12,  /* 'borderRadius: 30' makes the icon circular */
        marginRight: 10
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgrey'
    },
    row: {
        flexDirection: 'row',  /* Makes name and time side by side */
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