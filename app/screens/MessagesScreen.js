import { FlatList, View, StyleSheet } from "react-native"

import React from "react"

import ListItem from "../components/ListItem"
import Screen from "../components/Screen"
import ListItemSeparator from "../components/ListItemSeparator"

const messages = [
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
 return (
  <Screen>
   <FlatList
    data={messages}
    keyExtractor={(messages) => messages.id.toString()}
    renderItem={({ item }) => (
     <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log("Image selected", item)}
     />
    )}
    ItemSeparatorComponent={<ListItemSeparator />}
   />
  </Screen>
 )
}
