import { View, Text, StyleSheet } from "react-native"
import React from "react"

import colors from "../config/colors"

export default function AppText({ children, style }) {
 return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
 text: {
  fontSize: 17,
  fontWeight: "500",
  color: colors.black,
 },
})
