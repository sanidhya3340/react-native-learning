import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
export default function App() {
  // console.log("App executed");
  // const handlePress = () => console.log("text being clicked");
  // console.log(useDimensions());
  // console.log(Dimensions.get("screen"));
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
      ></View>
    </SafeAreaView>
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
});
