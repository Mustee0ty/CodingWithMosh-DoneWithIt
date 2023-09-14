// import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, ViewBase } from "react-native"

export default function App() {
 return (
  <View
   style={{
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    flexDirection: "row",
   }}
  >
   <View
    style={{
     backgroundColor: "dodgerblue",
     width: 100,
     height: 100,
    }}
   />
   <View
    style={{
     backgroundColor: "gold",
     width: 100,
     height: 100,
    }}
   />
   <View
    style={{
     backgroundColor: "tomato",
     width: 100,
     height: 100,
    }}
   />
  </View>
 )
}
