import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Constants from "expo-constants"
import React from "react"

export default function Screen({ children }) {
 return (
  <SafeAreaView style={styles.container}>
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
