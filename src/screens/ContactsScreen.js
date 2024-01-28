import { FlatList } from 'react-native'
import ContactListItem from '../components/ContactListItem';
import chats from '../../assets/dummy data/chats.json';

const ContactsScreen = () => {
  return (
    <FlatList
        data ={chats}
        renderItem={({ item }) => <ContactListItem user={item.user} />}
    />
  )
}

export default ContactsScreen