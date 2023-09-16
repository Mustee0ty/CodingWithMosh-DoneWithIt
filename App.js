import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"

// import WelcomeScreen from "./app/screens/WelcomeScreen"
// import ViewImageScreen from "./app/screens/ViewImageScreen"
import AppText from "./app/components/AppText"

export default function App() {
 return (
  <SafeAreaView style={styles.container}>
   <View
    style={{
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
    }}
   >
    {/* <MaterialCommunityIcons color="dodgerblue" name="email" size={100} /> */}
    <AppText>I love React Native!</AppText>
   </View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
 },
})
