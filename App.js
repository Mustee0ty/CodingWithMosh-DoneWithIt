import { View, StyleSheet } from "react-native"

// import AppText
import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import Cards from "./app/screens/Cards"

export default function App() {
 return <Cards />
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
})
