// import { StatusBar } from "expo-status-bar"
import {
 StyleSheet,
 Text,
 View,
 SafeAreaView,
 Button,
 Platform,
 StatusBar,
 Dimensions,
 useWindowDimensions,
} from "react-native"

// using useWindowsDimensions instead of useDimensions because the latter has been deprecated

import {
 useDimensions,
 useDeviceOrientation,
} from "@react-native-community/hooks"

export default function App() {
 const { landscape } = useDeviceOrientation()
 console.log(useDeviceOrientation())
 return (
  <SafeAreaView style={styles.container}>
   <View
    style={{
     backgroundColor: "dodgerblue",
     width: "100%",
     height: landscape ? "100%" : "30%",
    }}
   >
    <Text></Text>
   </View>
  </SafeAreaView>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "white",
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
 },
 viewStyler: {
  backgroundColor: "dodgerBlue",
  width: "50%",
  height: 70,
 },
})
