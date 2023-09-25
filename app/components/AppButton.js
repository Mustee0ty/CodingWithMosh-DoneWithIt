import { Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import colors from "../config/colors"

export default function AppButton({ title, onPress, color }) {
 return (
  <TouchableOpacity
   style={[{ backgroundColor: colors[color] }, styles.button]}
   onPress={onPress}
  >
   <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
 button: {
  backgroundColor: colors.primary,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
  padding: 15,
  marginVertical: 8,
  width: "100%",
 },
 text: {
  color: colors.white,
  fontSize: 18,
  textTransform: "uppercase",
  fontWeight: "bold",
 },
})
