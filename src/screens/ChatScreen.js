import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Message from "../components/Message";
import InputBox from "../components/InputBox";

import bg from "../../assets/images/BG.png";
import { API, graphqlOperation } from "aws-amplify";
import { getChatRoom, listMessagesByChatRoom } from "../graphql/queries";
import { onCreateMessage } from "../graphql/subscriptions"

const ChatScreen = () => {
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const chatroomID = route.params.id;

  // Fetch chat room
  useEffect(() => {
    API.graphql(graphqlOperation(getChatRoom, { id: chatroomID })).then(
      (result) => setChatRoom(result.data?.getChatRoom)
    );
  }, [chatroomID]);  // Calls the useEffect whenever we move to another chat room

  // Fetch messages
  useEffect(() => {
    API.graphql(
      graphqlOperation(listMessagesByChatRoom, {
        chatroomID,
        sortDirection: "ASC"
      })
    ).then(
      (result) => {
        setMessages(result.data?.listMessagesByChatRoom?.items)
      }
    );

    // Subscribe to new messages ONLY relating to the current chatroom
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage, {filter: { chatroomID: { eq: chatroomID } }})
      ).subscribe({
        next: ({ value }) => {
          setMessages((m) => [value.data.onCreateMessage, ...m]);
        },
        error: (error) => console.warn(error),
    });

    // Stop receiving updates from the subscription
    return () => subscription.unsubscribe();

  }, [chatroomID])  // Calls the useEffect whenever we move to another chat room

  // 
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  if (!chatRoom) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground source={bg} style={styles.bg}>
    <FlatList
        data={chatRoom.Messages.items}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
    />
    <InputBox chatroom={chatRoom} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});

export default ChatScreen;