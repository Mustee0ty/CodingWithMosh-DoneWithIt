import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
 text: {
  flex: 1,
  fontSize: 18,
  fontFamily: Platform.OS === "android" ? "Roboto" : "",
 },
})

export default styles
