import React, { useEffect, useState } from "react"
import * as MediaLibrary from "expo-media-library"

import Screen from "./app/components/Screen"

function App() {
 //  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions()

 const requestMediaLibraryPermission = async () => {
  const { status } = await MediaLibrary.requestPermissionsAsync()
  if (status !== "granted") {
   console.log("Permission to access library denied")
  }
 }

 useEffect(() => {
  requestMediaLibraryPermission()
 }, [])

 return <Screen></Screen>
}

export default App
