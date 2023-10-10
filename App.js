import React from "react"
import { Text, Button } from "react-native"
import Screen from "./app/components/Screen"

import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Test from "./app/components/Test"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const Link = () => {
 const navigation = useNavigation()
 return (
  <Button
   title="Click"
   onPress={() => navigation.navigate("Account", { id: 1 })}
  />
 )
}

const Tweets = ({ navigation }) => (
 <Screen>
  <Text>Tweets</Text>
  <Link />
 </Screen>
)

const TweetDetails = ({ route }) => (
 <Screen>
  <Text>Tweet Details {route.params.id} </Text>
 </Screen>
)

// const Stack = createStackNavigator()
// const StackNavigator = () => (
//  <Stack.Navigator
//   screenOptions={{
//    headerStyle: { backgroundColor: "dodgerblue" },
//    headerTintColor: "white",
//   }}
//  >
//   <Stack.Screen name="Tweets" component={Tweets} />
//   <Stack.Screen
//    name="TweetDetails"
//    component={TweetDetails}
//    options={({ route }) => ({ title: route.params.id })}
//   />
//  </Stack.Navigator>
// )

const Account = () => (
 <Screen>
  <Text>Account</Text>
 </Screen>
)

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
 <Tab.Navigator
  tabBarOptions={{
   activeBackgroundColor: "tomato",
   activeTintColor: "white",
   inactiveTintColor: "black",
  }}
 >
  <Tab.Screen
   name="Feed"
   component={Tweets}
   options={{
    tabBarIcon: ({ size, color }) => (
     <MaterialCommunityIcons name="home" size={size} color={color} />
    ),
   }}
  />
  <Tab.Screen name="Account" component={Account} />
 </Tab.Navigator>
)

export default function App() {
 return (
  <NavigationContainer>
   <TabNavigator />
  </NavigationContainer>
 )
}
