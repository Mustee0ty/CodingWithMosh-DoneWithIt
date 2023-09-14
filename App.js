// import { StatusBar } from "expo-status-bar"
import { View, Text, StyleSheet, ViewBase } from "react-native"

export default function App() {
 return (
  <View
   style={{
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center", // main axis aka horizontal axis
    alignItems: "center", // secondary axis aka vertical axis in a single line
    alignContent: "center", // Determines the alignment of items in the whole page aka the whole content, very important when using wrap
    flexWrap: "wrap",
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
   <View
    style={{
     backgroundColor: "grey",
     width: 100,
     height: 100,
    }}
   />
   <View
    style={{
     backgroundColor: "greenyellow",
     width: 100,
     height: 100,
    }}
   />
  </View>
 )
}
