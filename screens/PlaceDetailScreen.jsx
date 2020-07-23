import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlaceDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Places List Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PlaceDetailScreen;
