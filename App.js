import { View, StyleSheet } from "react-native"

// import AppText
import AppText from "./app/components/AppText"

export default function App() {
 return (
  <View style={styles.container}>
   <AppText>This should work</AppText>
  </View>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
})
