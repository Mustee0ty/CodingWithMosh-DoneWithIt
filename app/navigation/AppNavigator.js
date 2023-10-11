import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import ListingsScreen from "../screens/ListingsScreen"
import ListingEditScreen from "../screens/ListingEditScreen"
import AccountScreen from "../screens/AccountScreen"
import FeedNavigator from "./FeedNavigator"
import AcccountNavigator from "./AccountNavigator"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
 <Tab.Navigator>
  <Tab.Screen
   name="Feed"
   component={FeedNavigator}
   options={{
    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" />,
   }}
  />
  <Tab.Screen
   name="ListingEdit"
   component={ListingEditScreen}
   options={{
    tabBarIcon: ({ color, size }) => (
     <MaterialCommunityIcons name="plus-circle" />
    ),
   }}
  />
  <Tab.Screen
   name="Account"
   component={AcccountNavigator}
   options={{
    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account" />,
   }}
  />
 </Tab.Navigator>
)

export default AppNavigator
