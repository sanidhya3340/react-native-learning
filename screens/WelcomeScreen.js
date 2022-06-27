import React from "react";
import { Text, Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../app/components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../app/assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../app/assets/logo.png")} />
        <Text style={styles.tagline}>PGs on Rent!!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={"Login"} />
        <AppButton title={"Register"} color={"secondry"} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
export default WelcomeScreen;
