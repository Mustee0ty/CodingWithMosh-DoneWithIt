import { View, StyleSheet, Image, TouchableWithoutFeedback } from "react-native"
import React from "react"

import colors from "../config/colors"
import AppText from "../components/AppText"

export default function Card({ title, subTitle, image, onPress }) {
 return (
  <TouchableWithoutFeedback onPress={onPress}>
   <View style={styles.card}>
    <Image style={styles.image} source={image} />
    <View style={styles.detailsContainer}>
     <AppText style={styles.title}>{title}</AppText>
     <AppText style={styles.subtitle}>{subTitle}</AppText>
    </View>
   </View>
  </TouchableWithoutFeedback>
 )
}

const styles = StyleSheet.create({
 card: {
  borderRadius: 15,
  backgroundColor: colors.white,
  marginBotton: 20,
  overflow: "hidden ",
 },
 image: {
  width: "100%",
  height: 200,
 },
 detailsContainer: {
  padding: 20,
 },
 title: {
  marginBottom: 7,
 },
 subtitle: {
  color: colors.secondary,
  fontWeight: "bold",
 },
})
