import {
 View,
 StyleSheet,
 Image,
 TouchableOpacity,
 TouchableHighlight,
} from "react-native"
import React from "react"

// Import Component
import AppText from "./AppText"

// import Swipeable
import {
 PanGestureHandler,
 GestureHandlerRootView,
} from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable"

import colors from "../config/colors"
// import { PanGesture } from "react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture"

export default function ListItem({
 title,
 subTitle,
 image,
 onPress,
 renderRightActions,
 IconComponent,
}) {
 return (
  <GestureHandlerRootView>
   <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
     <View style={styles.container}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.detailsContainer}>
       <AppText style={styles.title}>{title}</AppText>
       {subTitle && <AppText style={styles.subtitle}>{subTitle}</AppText>}
      </View>
     </View>
    </TouchableHighlight>
   </Swipeable>
  </GestureHandlerRootView>
 )
}

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  padding: 15,
  backgroundColor: colors.white,
 },
 image: {
  width: 70,
  height: 70,
  borderRadius: 35,
 },
 detailsContainer: {
  marginLeft: 10,
  justifyContent: "center",
 },
 title: {
  fontWeight: "bold",
 },
 subtitle: {
  color: colors.medium,
 },
})
