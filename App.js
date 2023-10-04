import React, { useEffect, useState } from "react"
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"

import Screen from "./app/components/Screen"
import { Button, Image, FlatList, View } from "react-native"

function App() {
 const [imageUri, setImageUri] = useState()

 const requestPermission = async () => {
  const { granted } = await ImagePicker.requestCameraPermissionsAsync()
  if (!granted) {
   console.log("Permission to access library denied")
  }
 }

 useEffect(() => {
  requestPermission()
 }, [])

 const selectImage = async () => {
  try {
   const result = await ImagePicker.launchImageLibraryAsync()
   if (!result.canceled) setImageUri(result.uri)
  } catch (error) {
   console.log("Error reading an image")
  }
 }

 return (
  <Screen>
   <Button title="Select Image" onPress={selectImage} />
   <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
  </Screen>
 )
}

export default App
