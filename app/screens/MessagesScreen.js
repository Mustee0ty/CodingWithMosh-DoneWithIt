import {
 FlatList,
 SafeAreaView,
 Platform,
 StatusBar,
 StyleSheet,
} from "react-native"

import Constants from "expo-constants"

import React from "react"

import ListItem from "../components/ListItem"
import Screen from "../components/Screen"

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
  <SafeAreaViw style={styles.container}>
   <FlatList
    data={messages}
    keyExtractor={(messages) => messages.id.toString()}
    renderItem={({ item }) => (
     <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
     />
    )}
   />
  </SafeAreaViw>
 )
}

const styles = StyleSheet.create({
 container: {
  // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  paddingTop: Constants.statusBarHeight,
 },
})
