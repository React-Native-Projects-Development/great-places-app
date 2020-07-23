import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import * as placesActions from "../store/places-actions";

import Colors from "../constants/Colors";
import ImagePicker from "../components/ImagePicker";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();

  const dispatch = useDispatch();
  const titleChangeHandler = (text) => setTitle(text);

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(title, selectedImage));
    props.navigation.goBack();
  };

  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={titleChangeHandler}
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <Button
          title="Save Place"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: "Add Place",
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    marginVertical: 4,
    paddingHorizontal: 2,
  },
});
export default NewPlaceScreen;
