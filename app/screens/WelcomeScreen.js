import React from "react"
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native"

function WelcomeScreen(props) {
 return (
  <ImageBackground
   style={styles.background}
   source={require("../assets/background.jpg")}
  >
   {/* The logo container */}
   <View style={styles.logoContainer}>
    <Image style={styles.redLogo} source={require("../assets/logo-red.png")} />
    <Text style={styles.logoText}>Sell what we don't have</Text>
   </View>

   <View style={styles.loginButton}></View>
   <View style={styles.registerButton}></View>
  </ImageBackground>
 )
}

const styles = StyleSheet.create({
 background: {
  flex: 1,
  justifyContent: "flex-end",
  alignItems: "center",
 },
 loginButton: {
  width: "100%",
  height: 70,
  backgroundColor: "#fc5c65",
  alignContent: "",
 },
 registerButton: {
  width: "100%",
  height: 70,
  backgroundColor: "#4ecdc4",
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
})

export default WelcomeScreen
