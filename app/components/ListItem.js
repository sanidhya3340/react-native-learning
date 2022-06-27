import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import AppText from "./AppText";
import colors from "../../config/colors";
import { Swipeable } from "react-native-gesture-handler";
const LeftActions = () => {
  return (
    <View>
      <Text>Add to the Cart</Text>
    </View>
  );
};
function ListItem({ title, subtitle, image, onPress, onSwipeFromLeft }) {
  return (
    <Swipeable renderLeftActions={onSwipeFromLeft}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title} text={title} />
            <AppText style={styles.subtitle} text={subtitle} />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    color: colors.medium,
  },
});

export default ListItem;
