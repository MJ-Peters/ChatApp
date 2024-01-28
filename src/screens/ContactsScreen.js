import { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem'
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers } from "../graphql/queries"

const ContactsScreen = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // API connection to graphQL, send operation with listUsers query, then renders the result
    API.graphql(graphqlOperation(listUsers)).then((result) => {   
      setUsers(result.data?.listUsers?.items)
    })
  }, [])

  console.log

  return (
    <FlatList
        data ={users}
        renderItem={({ item }) => <ContactListItem user={item} />}
    />
  )
}

export default ContactsScreen

