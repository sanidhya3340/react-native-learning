import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
} from "react-native";
import ListItem from "../app/components/ListItem";
import ListItemDeleteAction from "../app/components/ListItemDeleteAction";
import ListItemSeparator from "../app/components/ListItemSeparator";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../app/assets/sanu.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../app/assets/sanu.jpg"),
  },
  {
    id: 13,
    title: "T13",
    description: "D13",
    image: require("../app/assets/sanu.jpg"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
            onSwipeFromLeft={() => (
              <ListItemDeleteAction
                onpress={() => console.log("delete item", item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../app/assets/sanu.jpg"),
            },
          ]);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 6 : 0,
  },
});
