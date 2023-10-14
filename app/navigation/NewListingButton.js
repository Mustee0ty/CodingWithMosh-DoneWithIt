import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import colors from "../config/colors"
import { MaterialCommunityIcons } from "@expo/vector-icons"

function NewListingButton({ onPress }) {
 return (
  <TouchableOpacity onPress={onPress}>
   <View style={styles.container}>
    <MaterialCommunityIcons name="plus-circle" color={colors.white} size={30} />
   </View>
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: colors.primary,
  borderColor: colors.white,
  borderRadius: 40,
  borderWidth: 10,
  bottom: 25,
  height: 75,
  width: 75,
 },
})

export default NewListingButton
