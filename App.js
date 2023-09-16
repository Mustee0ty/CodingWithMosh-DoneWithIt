import { View, Text, SafeAreaView } from "react-native"
import React from "react"
// import WelcomeScreen from "./app/screens/WelcomeScreen"
// import ViewImageScreen from "./app/screens/ViewImageScreen"

export default function App() {
 return (
  <SafeAreaView>
   <View
    style={{
     justifyContent: "center",
     alignSelf: "center",
     backgroundColor: "dodgerblue",
     width: 100,
     height: 100,
     elevation: 60,
     paddingLeft: 40,
     marginBottom: 10,
    }}
   >
    <View
     style={{
      backgroundColor: "gold",
      height: 50,
      width: 50,
     }}
    ></View>
   </View>
   <View
    style={{
     justifyContent: "center",
     alignSelf: "center",
     backgroundColor: "red",
     width: 100,
     height: 100,
     elevation: 60,
     paddingLeft: 40,
    }}
   ></View>
  </SafeAreaView>
 )
}
