import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback,
  View,
} from "react-native";

export default function App() {
  // console.log("App executed");
  // const handlePress = () => console.log("text being clicked");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>
        Hello React native! This is a reallyh really long test and I am writing
        this jus t to enjoy my process of learning and development in the world!
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image Tapped")}>
        <View
          style={styles.stretch}
          onLoadEnd={() => console.log("Image Loaded")}
          source={require("./assets/favicon.png")}
        />
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
    backgroundColor: "dodgerblue",
  },
});
