import { Text, View, Image, StyleSheet } from 'react-native';

const ChatListItem = function() {
    return (
        /* Main container */
        <View>
            {/* User profile picture */}
            <Image
                source={{ uri: 'https://backend.artreview.com/wp-content/uploads/2021/11/square-Mark-Zuckerberg_Courtesy-Facebook.jpg' }}
                style={styles.image}
            />
            {/* Content container */}
            <View>
                {/* Row with name and time */}
                <View>
                    <Text>Mark</Text>
                    <Text>8:30</Text>
                </View>

                {/* Row containing the most recent message */}
                <Text>Hello World</Text>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    image: {
        width: 60,
        height: 60
    }
})

export default ChatListItem;