import { Text, StyleSheet, Platform } from "react-native"
import React from "react"

export default function AppText({ children }) {
 return <Text style={styles.Text}>{children}</Text>
}

Platform.select({
 ios: {
  fontSize: 20,
  fontFamily: "Avenir",
 },
 android: {
  fontSize: 18,
  fontFamily: "Roboto",
 },
})

const styles = StyleSheet.create({
 text: {
  color: "dodgerblue",
  ...Platform.select({
   ios: {
    fontSize: 20,
    fontFamily: "Avenir",
   },
   android: {
    fontSize: 18,
    fontFamily: "Roboto",
   },
  }),
 },
})
