import React from "react";
import { View, StyleSheet, Platform, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  return (
    <View style={styles.screen}>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlaceItem
            image={item.imageUri}
            title={item.title}
            address={null}
            onSelect={() =>
              props.navigation.navigate("PlaceDetail", {
                placeTitle: item.title,
                placeId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => navData.navigation.navigate("NewPlace")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PlacesListScreen;
