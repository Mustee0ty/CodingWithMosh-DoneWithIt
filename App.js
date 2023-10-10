import React from "react"
import { Text, Button } from "react-native"
import Screen from "./app/components/Screen"

import ListingsScreen from "./app/screens/ListingsScreen"
import ListingEditScreen from "./app/screens/ListingEditScreen"
import AccountScreen from "./app/screens/AccountScreen"

import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Test from "./app/components/Test"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"

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

const Stack = createStackNavigator()
const StackNavigator = () => (
 <Stack.Navigator
  screenOptions={{
   headerStyle: { backgroundColor: "dodgerblue" },
   headerTintColor: "white",
  }}
 >
  <Stack.Screen name="Tweets" component={ListingsScreen} />
  <Stack.Screen
   name="TweetDetails"
   component={ListingDetailsScreen}
   options={({ route }) => ({ title: route.params.id })}
  />
 </Stack.Navigator>
)

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
   component={ListingsScreen}
   options={{
    tabBarIcon: ({ size, color }) => (
     <MaterialCommunityIcons name="home" size={size} color={color} />
    ),
   }}
  />
  <Tab.Screen name="Add" component={ListingEditScreen} />

  <Tab.Screen name="Account" component={AccountScreen} />
 </Tab.Navigator>
)

export default function App() {
 return (
  <NavigationContainer>
   <TabNavigator />
  </NavigationContainer>
 )
}
