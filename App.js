import React, { useEffect, useState } from "react"
import * as MediaLibrary from "expo-media-library"
import * as Permissions from "expo-permissions"

import Screen from "./app/components/Screen"
import { Button, Image, FlatList, View } from "react-native"

function App() {
 const [images, setImages] = useState([])

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
  setImages(mediaAssets.assets)
 }

 return (
  <Screen>
   <Button title="Select Image" onPress={selectImage} />
   {/* <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} /> */}
   <FlatList
    data={images}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
     <View>
      <Image source={{ uri: item.uri }} style={{ width: 200, height: 200 }} />
     </View>
    )}
   ></FlatList>
  </Screen>
 )
}

export default App
