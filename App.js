import React, { useEffect, useState } from "react"
import * as MediaLibrary from "expo-media-library"
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"

import Screen from "./app/components/Screen"
import { Button, Image, FlatList, View } from "react-native"
import ImageInput from "./app/components/ImageInput"
import ImageInputList from "./app/components/ImageInputList"

function App() {
 const [imageUris, setImageUris] = useState([])

 //  Add Image
 const handleAdd = (uri) => {
  setImageUris([...imageUris, uri])
 }

 //  Remove Image
 const handleRemove = (uri) => {
  setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
 }

 return (
  <Screen>
   <ImageInputList
    imageUris={imageUris}
    onAddmage={handleAdd}
    onRemoveImage={(uri) => handleRemove(uri)}
   />
  </Screen>
 )
}

export default App
