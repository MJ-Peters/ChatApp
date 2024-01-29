import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Navigator from './src/Navigation'
import { Amplify, Auth, API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator } from 'aws-amplify-react-native'
import awsconfig from './src/aws-exports'
import { useEffect } from 'react'
import { getUser } from './src/graphql/queries'
import { createUser } from "./src/graphql/mutations"

Amplify.configure({...awsconfig, Analytics: {disabled: true}})

// LEAVE APP.JS AS CLEAN AS POSSIBLE. ONLY HAVE GLOBAL STUFF IN THIS FILE

function App() {

  useEffect(() => {
    const syncUser = async () => {
      // Get the Authentication user, not using the cache and always query the authentication
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})

      // Query the database using the Authentication user id
      const userData = await API.graphql(graphqlOperation(getUser, { id: authUser.attributes.sub }))

      // Check if the user is in the database, if they are then return will finish the function
      if (userData.data.getUser) {
        return
      }

      // Defining a new user to be added if the user doesn't exist
      const newUser = {
        id: authUser.attributes.sub,
        name: authUser.attributes.phone_number,
        status: "Hi, I'm new to ChatApp!"
      }

      // Add the new user to the DB
      const newUserResponse = await API.graphql(
        graphqlOperation(createUser, { input: newUser })
      )
    }

    syncUser()
  }, [])

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