import React, { useEffect } from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import colors from "../config/colors"

function ImageInput({ imageUri, onChangeImage }) {
 useEffect(() => {
  requestPermission()
 }, [])

 const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync()
  if (!granted) {
   console.log("Permission to access library denied")
  }
 }

 const handlePress = async () => {
  const selectImage = async () => {
   try {
    const result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.Images,
     quality: 0.5,
    })
    if (!result.canceled) onChangeImage(result.uri)
   } catch (error) {
    console.log("Error reading an image")
   }
  }

  if (!imageUri) selectImage()
  else
   Alert.alert("Delete", "Are you sure you want to delete this image?", [
    { text: "Yes", onPress: () => onChangeImage(null) },
    { text: "No" },
   ])
 }
 return (
  <TouchableWithoutFeedback onPress={handlePress}>
   <View style={styles.container}>
    {!imageUri && (
     <MaterialCommunityIcons color={colors.medium} name="camera" size={40} />
    )}
    {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
   </View>
  </TouchableWithoutFeedback>
 )
}

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
  backgroundColor: colors.light,
  borderRadius: 15,
  justifyContent: "center",
  overflow: "hidden",
  height: 100,
  width: 100,
 },
 image: {
  height: "100%",
  width: "100%",
 },
})

export default ImageInput
