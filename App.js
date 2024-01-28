import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/Navigation'
import { Amplify } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'

Amplify.configure({...awsconfig, Analytics: {disabled: true}})

// LEAVE APP.JS AS CLEAN AS POSSIBLE. ONLY HAVE GLOBAL STUFF IN THIS FILE

function App() {
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

export default withAuthenticator(App)  // Wrapping the application in our AWS Amplify authenticator