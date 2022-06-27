import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../../config/colors";
import AppText from "./AppText";

function Card({ title, subtitle, image }) {
  return (
    <View>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title} text={title} />
        <AppText text={subtitle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  detailsContainer: {
    padding: 20,
  },
  subtitle: {
    color: colors.secondry,
    fontWeight: "bold",
  },
});

export default Card;
