import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigation';

// LEAVE APP.JS AS CLEAN AS POSSIBLE. ONLY HAVE GLOBAL STUFF IN THIS FILE

export default function App() {
  return (
    <View style={styles.container}>
        <Navigator />
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center"
  },
});
