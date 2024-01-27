import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './src/components/ChatListItem';

// Dummy chat data
const chat = {
  id: "1",
  user: {
    image:
      "https://backend.artreview.com/wp-content/uploads/2021/11/square-Mark-Zuckerberg_Courtesy-Facebook.jpg",
    name: "Mark",
  },
  lastMessage: {
    text: "Hello World",
    createdAt: "08:30",
  },
};

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListItem chat={chat} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
