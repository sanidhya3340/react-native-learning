import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../app/components/AppText";
import ListItem from "../app/components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../app/assets/pg2.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} text={"New Pg for sale"} />
        <AppText style={styles.price} text={"$100"} />
        <View style={styles.userContainer}>
          <ListItem
            image={require("../app/assets/sanu.jpg")}
            title={"Sanidhya Bhardwaj"}
            subtitle={"5 listings"}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondry,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
