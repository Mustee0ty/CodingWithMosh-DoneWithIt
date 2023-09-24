import React, { useState } from "react"
import { FlatList, View, StyleSheet } from "react-native"
import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"
import ListItemDeleteAction from "../components/ListItemDeleteAction"

const initialMessages = [
 {
  id: 1,
  title: "T1",
  description: "D1",
  image: require("../assets/profilePic.jpg"),
 },
 {
  id: 2,
  title: "T2",
  description: "D2",
  image: require("../assets/profilePic.jpg"),
 },
]

export default function MessagesScreen() {
 const [messages, setMessages] = useState(initialMessages)

 const handleDelete = (messageId) => {
  // Use the functional form of setMessages to avoid issues
  setMessages((prevMessages) =>
   prevMessages.filter((message) => message.id !== messageId)
  )
 }

 return (
  <Screen>
   <FlatList
    data={messages}
    keyExtractor={(message) => message.id.toString()}
    renderItem={({ item }) => (
     <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log("Image selected", item)}
      renderRightActions={() => (
       <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
      )}
     />
    )}
    ItemSeparatorComponent={ListItemSeparator}
   />
  </Screen>
 )
}
