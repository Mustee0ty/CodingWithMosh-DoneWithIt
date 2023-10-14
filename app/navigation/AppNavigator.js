import React from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import ListingsScreen from "../screens/ListingsScreen"
import ListingEditScreen from "../screens/ListingEditScreen"
import AccountScreen from "../screens/AccountScreen"
import FeedNavigator from "./FeedNavigator"
import AcccountNavigator from "./AccountNavigator"
import NewListingButton from "./NewListingButton"

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
 <Tab.Navigator>
  <Tab.Screen
   name="Feed"
   component={FeedNavigator}
   options={{
    tabBarIcon: ({ color, size }) => (
     <MaterialCommunityIcons name="home" color={color} size={size} />
    ),
   }}
  />
  <Tab.Screen
   name="ListingEdit"
   component={ListingEditScreen}
   options={({ navigation }) => ({
    tabBarButton: () => (
     <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />
    ),
   })}
  />
  <Tab.Screen
   name="Account"
   component={AcccountNavigator}
   options={{
    tabBarIcon: ({ color, size }) => (
     <MaterialCommunityIcons name="account" color={color} size={size} />
    ),
   }}
  />
 </Tab.Navigator>
)

export default AppNavigator
