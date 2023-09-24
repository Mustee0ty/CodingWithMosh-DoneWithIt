import { StyleSheet, TextInput, Text } from "react-native"
import { useState } from "react"

import Screen from "./app/components/Screen"

export default function App() {
 const [firstName, setFirstName] = useState("")

 return (
  <Screen>
   <Text>{firstName}</Text>
   <TextInput
    keyboardType="numeric"
    onChangeText={(text) => setFirstName(text)}
    placeholder="first name"
    style={{
     borderBottomColor: "#ccc",
     borderBottomWidtht: 1,
    }}
   />
  </Screen>
 )
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
})
