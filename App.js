import React, { useEffect, useState } from "react"
import * as MediaLibrary from "expo-media-library"
import * as Permissions from "expo-permissions"

import Screen from "./app/components/Screen"
import { Button, Image, FlatList, View } from "react-native"

function App() {
 const [imageUri, setImageUri] = useState([])

 const requestMediaLibraryPermission = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync()
  if (status !== "granted") {
   console.log("Permission to access library denied")
  }
 }

 useEffect(() => {
  requestMediaLibraryPermission()
 }, [])

 const selectImage = async () => {
  const mediaAssets = await MediaLibrary.getAssetsAsync({ mediaType: "photo" })
  setImageUri(mediaAssets.assets)
 }

 return (
  <Screen>
   <Button title="Select Image" onPress={selectImage} />
   <Image
    source={{ uri: setImageUri.uri }}
    style={{ width: 200, height: 200 }}
   />
  </Screen>
 )
}

export default App
