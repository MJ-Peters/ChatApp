import { View, Text, FlatList } from 'react-native'
import chats from '../../assets/dummy data/chats.json'
import ChatListItem from '../components/ChatListItem'

const ChatsScreen = () => {
  return (
    // renderItem is a function for instructions on rendering items from chats
    <FlatList
        data ={chats}
        renderItem={({ item }) => <ChatListItem chat={item} />}
    />
  )
}

export default ChatsScreen