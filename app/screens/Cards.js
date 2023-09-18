import { View, Text } from "react-native"
import React from "react"
import Card from "./Card"

export default function Cards() {
 return (
  <View
   style={{
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
   }}
  >
   <Card
    title="Red jacket for sale"
    subTitle="$100"
    image={require("../assets/Jacket.jpeg")}
   />
  </View>
 )
}
