import React, { useState } from "react"
import {
 View,
 TextInput,
 Platform,
 StyleSheet,
 TouchableWithoutFeedback,
 Modal,
 Button,
 FlatList,
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppText from "./AppText"
import Screen from "./Screen"
import defaultStyles from "../config/styles"
import PickerItem from "./PickerItem"

function AppPicker({
 icon,
 items,
 onSelectItem,
 selectedItem,
 placeholder,
 ...otherProps
}) {
 const [modalVisible, setModalVisible] = useState(false)

 return (
  <>
   <TouchableWithoutFeedback onPress={() => setModalVisible(!modalVisible)}>
    <View style={styles.container}>
     {icon && (
      <MaterialCommunityIcons
       name={icon}
       size={20}
       color={defaultStyles.medium}
       style={styles.icon}
      />
     )}
     <AppText style={styles.text}>
      {selectedItem ? selectedItem.label : placeholder}
     </AppText>
     <MaterialCommunityIcons
      name="chevron-down"
      size={20}
      color={defaultStyles.medium}
     />
    </View>
   </TouchableWithoutFeedback>
   <Modal visible={modalVisible} animationType="slide">
    <Screen>
     <Button title="Close" onPress={() => setModalVisible(!modalVisible)} />
     <FlatList
      data={items}
      keyExtractor={(item) => item.value.toString()}
      renderItem={({ item }) => (
       <PickerItem
        label={item.label}
        onPress={() => {
         setModalVisible(false)
         onSelectItem(item)
        }}
       />
      )}
     />
    </Screen>
   </Modal>
  </>
 )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: defaultStyles.light,
  borderRadius: 25,
  flexDirection: "row",
  width: "100%",
  padding: 15,
  marginVertical: 10,
 },
 icon: {
  marginRight: 10,
  justifyContent: "center",
  alignSelf: "center",
 },
 text: {
  flex: 1,
 },
})

export default AppPicker
