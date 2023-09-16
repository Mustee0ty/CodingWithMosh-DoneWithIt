import { Text, StyleSheet } from "react-native"
import React from "react"

export default function AppText({ children }) {
 return <Text style={styles.Text}>{children}</Text>
}

const styles = StyleSheet.create({
 text: {
  color: "white",
  fontSize: 18,
  fontFamily: "Roboto",
 },
})
