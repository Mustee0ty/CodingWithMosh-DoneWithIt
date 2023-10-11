import React from "react"
import { FlatList, StyleSheet } from "react-native"

import Card from "./Card"
import Screen from "../components/Screen"

import colors from "../config/colors"

const Listings = [
 {
  id: 1,
  title: "Itachi for sale",
  price: 100,
  image: require("../assets/Jacket.jpeg"),
 },
 {
  id: 2,
  title: "Sniper in great condition",
  price: 1000,
  image: require("../assets/Jacket.jpeg"),
 },
]

function ListingsScreen({ navigation }) {
 return (
  <Screen style={styles.screen}>
   <FlatList
    data={Listings}
    keyExtractor={(listing) => listing.id.toString()}
    renderItem={({ item }) => (
     <Card
      title={item.title}
      subTitle={"$" + item.price}
      image={item.image}
      onPress={() => navigation.navigate("ListingDetails", item)}
     />
    )}
   />
  </Screen>
 )
}

const styles = StyleSheet.create({
 screen: {
  padding: 20,
  backgroundColor: colors.light,
 },
})

export default ListingsScreen
