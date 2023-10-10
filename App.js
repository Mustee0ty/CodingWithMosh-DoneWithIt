import React from "react"
import { Text, Button } from "react-native"
import Screen from "./app/components/Screen"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Tweets = ({ navigation }) => (
 <Screen>
  <Text>Tweets</Text>
  <Button
   title="View Tweets"
   onPress={() => navigation.navigate("TweetDetails")}
  />
 </Screen>
)

const TweetDetails = () => (
 <Screen>
  <Text>Tweet Details</Text>
 </Screen>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
 <Stack.Navigator>
  <Stack.Screen name="Tweets" component={Tweets} />
  <Stack.Screen name="TweetDetails" component={TweetDetails} />
 </Stack.Navigator>
)

export default function App() {
 return (
  <NavigationContainer>
   <StackNavigator />
  </NavigationContainer>
 )
}
