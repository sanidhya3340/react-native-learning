// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  StatusBar,
  Alert,
} from "react-native";

export default function App() {
  // console.log("App executed");
  // const handlePress = () => console.log("text being clicked");

  return (
    <View style={styles.container}>
      {/* <Text numberOfLines={1}>
        Hello React native! This is a reallyh really long test and I am writing
        this jus t to enjoy my process of learning and development in the world!
      </Text> */}
      <Button
        color="orange"
        title="Click Me"
        onPress={() =>
          Alert.alert("Button Tapped", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />

      {/* <Button
        color="green"
        title="second button with prompt"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: "stretch",
    backgroundColor: "dodgerblue",
  },
});
