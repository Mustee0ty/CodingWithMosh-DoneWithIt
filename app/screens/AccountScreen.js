import React from "react"
import { View, StyleSheet, FlatList } from "react-native"

import Screen from "../components/Screen"
import ListItem from "../components/ListItem"
import Icon from "../components/Icon"
import ListItemSperatorComponent from "../components/ListItemSeparator"

import colors from "../config/colors"

const menuItems = [
 {
  title: "My Listings",
  icon: {
   name: "format-list-bulleted",
   backgroundColor: colors.primary,
  },
 },
 {
  title: "My Messages",
  icon: {
   name: "email",
   backgroundColor: colors.secondary,
  },
  targetScreen: "Messages",
 },
]
function AccountScreen({ navigation }) {
 return (
  <Screen style={styles.screen}>
   <View style={styles.container}>
    <ListItem
     title="Mustapha Tasiu"
     subTitle="razzmatas@gmail.com"
     image={require("../assets/profilePic.jpg")}
    />
   </View>
   <View style={styles.container}>
    <FlatList
     data={menuItems}
     keyExtractor={(menuItems) => menuItems.title}
     ItemSeparatorComponent={ListItemSperatorComponent}
     renderItem={({ item }) => (
      <ListItem
       title={item.title}
       IconComponent={
        <Icon
         name={item.icon.name}
         backgroundColor={item.icon.backgroundColor}
        />
       }
       onPress={() => navigation.navigate(item.targetScreen)}
      />
     )}
    />
   </View>
   <ListItem
    title="Log Out"
    IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
   />
  </Screen>
 )
}

const styles = StyleSheet.create({
 screen: {
  backgroundColor: colors.light,
 },
 container: {
  marginVertical: 20,
 },
})

export default AccountScreen
