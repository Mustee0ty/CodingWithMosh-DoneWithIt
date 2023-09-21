import { View, StyleSheet } from "react-native"

// import AppText
import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import Cards from "./app/screens/Cards"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import MessagesScreen from "./app/screens/MessagesScreen"

export default function App() {
 return <MessagesScreen />
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
})
