import { Text, StyleSheet, Platform } from "react-native"
import React from "react"

export default function AppText({ children }) {
 return <Text style={styles.Text}>{children}</Text>
}

const styles = StyleSheet.create({
 text: {
  fontSize: 18,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
 },
})
