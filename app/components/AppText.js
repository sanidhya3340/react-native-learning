import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";

export default function AppText({ text, style }) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
