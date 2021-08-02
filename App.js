import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

// Setup Redux

export default function App() {
  return (
    // <Provider>
    <View style={styles.container}>
      <Text>Lets build Uber!</Text>
      <StatusBar style="auto" />
    </View>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
