import { View, StyleSheet, Image, TouchableHighlight } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

// import Swipeable
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable"

// import component
import AppText from "./AppText"
// import component
import colors from "../config/colors"

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
       <AppText style={styles.title} numberOfLines={1}>
        {title}
       </AppText>
       {subTitle && (
        <AppText style={styles.subtitle} numberOfLines={2}>
         {subTitle}
        </AppText>
       )}
      </View>
      <MaterialCommunityIcons
       name="chevron-right"
       color={colors.medium}
       size={25}
      />
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
  alignItems: "center",
 },
 image: {
  width: 70,
  height: 70,
  borderRadius: 35,
 },
 detailsContainer: {
  flex: 1,
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
