import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import Constants from "expo-constants"
import React, { Children } from "react"

export default function Screen({ children }) {
 return (
  <SafeAreaView style={styles.screen}>
   <View>{props.children}</View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  paddingTop: Constants.statusBarHeight,
 },
})
