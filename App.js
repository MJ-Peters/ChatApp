import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';
import ChatScreen from './src/screens/ChatScreen';

// LEAVE APP.JS AS CLEAN AS POSSIBLE. ONLY HAVE GLOBAL STUFF IN THIS FILE

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical: 50  // Temporary iphone camera notch fix
  },
});
