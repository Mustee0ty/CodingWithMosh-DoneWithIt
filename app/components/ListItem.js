import {
 View,
 StyleSheet,
 Image,
 TouchableOpacity,
 TouchableHighlight,
} from "react-native"
import React from "react"

// Import Component
import AppText from "./AppText"

import colors from "../config/colors"

export default function ListItem({ title, subTitle, image, onPress }) {
 return (
  <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
   <View style={styles.container}>
    <Image style={styles.image} source={image} />
    <View>
     <AppText style={styles.title}>{title}</AppText>
     <AppText style={styles.subtitle}>{subTitle}</AppText>
    </View>
   </View>
  </TouchableHighlight>
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  padding: 15,
 },
 image: {
  width: 70,
  height: 70,
  borderRadius: 35,
  marginRight: 10,
 },
 title: {
  fontWeight: "bold",
 },
 subtitle: {
  color: colors.medium,
 },
})
