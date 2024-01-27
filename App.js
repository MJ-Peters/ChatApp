import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatsScreen from './src/screens/ChatsScreen';

// LEAVE APP.JS AS CLEAN AS POSSIBLE. ONLY HAVE GLOBAL STUFF IN THIS FILE

export default function App() {
  return (
    <View style={styles.container}>
      <ChatsScreen />
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
