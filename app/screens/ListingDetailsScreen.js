import { View, Image, StyleSheet } from "react-native"
import React from "react"
import ListItem from "../components/ListItem"

// Custom components
import AppText from "../components/AppText"

import colors from "../config/colors"

export default function ListingDetailsScreen() {
 return (
  <View style={styles.container}>
   <Image
    style={styles.image}
    source={require("../assets/Jacket.jpeg")}
   ></Image>
   <View style={styles.detailsContainer}>
    <AppText style={styles.title}>Itachi for Sale</AppText>
    <AppText style={styles.price}>$50</AppText>
    <View style={styles.userContainer}>
     <ListItem
      image={require("../assets/profilePic.jpg")}
      title="Ali Manda"
      subTitle="5 Listings"
     />
    </View>
   </View>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignContent: "center",
 },
 image: {
  width: "100%",
  height: 300,
 },
 detailsContainer: {
  padding: 20,
 },
 title: {
  fontSize: 24,
  fontWeight: "500",
 },
 price: {
  color: colors.secondary,
  fontWeight: "bold",
  fontSize: 20,
  marginVertical: 10,
 },
 userContainer: {
  marginVertical: 40,
 },
})
