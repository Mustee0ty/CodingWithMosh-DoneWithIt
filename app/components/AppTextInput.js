import React from "react"
import { View, TextInput, Platform, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"

function AppTextInput({ icon, ...otherProps }) {
 return (
  <View style={styles.container}>
   {icon && (
    <MaterialCommunityIcons
     name={icon}
     size={20}
     color={defaultStyles.medium}
     style={styles.icon}
    />
   )}
   <TextInput style={defaultStyles.text} {...otherProps} />
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: defaultStyles.light,
  borderRadius: 25,
  flexDirection: "row",
  width: "100%",
  padding: 15,
  marginVertical: 10,
 },
 icon: {
  marginRight: 10,
  justifyContent: "center",
  alignSelf: "center",
 },
})

export default AppTextInput