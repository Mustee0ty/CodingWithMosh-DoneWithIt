import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Constants from "expo-constants"
import React from "react"

export default function Screen({ children, style }) {
 return (
  <SafeAreaView style={[styles.container, style]}>
   <View>{children}</View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  paddingTop: Constants.statusBarHeight,
  flex: 1,
 },
})
