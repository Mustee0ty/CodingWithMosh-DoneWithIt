import { View, StyleSheet } from "react-native"

// import AppText
import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton"
import WelcomeScreen from "./app/screens/WelcomeScreen"

export default function App() {
 return <WelcomeScreen />
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
})
