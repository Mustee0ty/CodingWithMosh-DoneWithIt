import React from "react"
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native"

import AppButton from "../components/AppButton"

function WelcomeScreen(props) {
 return (
  <ImageBackground
   blurRadius={10}
   style={styles.background}
   source={require("../assets/background.jpg")}
  >
   {/* The logo container */}
   <View style={styles.logoContainer}>
    <Image style={styles.redLogo} source={require("../assets/logo-red.png")} />
    <Text style={styles.logoText}>Sell what we don't have</Text>
   </View>

   {/* Buttons Container */}
   <View style={styles.buttonsContainer}>
    <AppButton title="login" color="primary" />
    <AppButton title="Register" color="secondary" />
   </View>
  </ImageBackground>
 )
}

const styles = StyleSheet.create({
 background: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
 },
 logoContainer: {
  position: "absolute",
  top: 50,
  alignItems: "center",
 },
 redLogo: {
  width: 100,
  height: 100,
 },
 buttonsContainer: {
  padding: 20,
  width: "100%",
  height: "auto",
 },
 logoText: {
  fontSize: 25,
  fontWeight: "600",
  paddingVertical: 20,
 },
})

export default WelcomeScreen
