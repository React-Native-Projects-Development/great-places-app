import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";

export const addPlace = (title, image) => {
  return async (dispatch) => {
    const fileName = image
      .split("/")
      .pop(); /* with pop() I get the last segment of the splitted string */
    const newPath = FileSystem.documentDirectory + fileName;

    // Moves from A to B
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }

    dispatch({
      type: ADD_PLACE,
      placeData: {
        title: title,
        image: newPath,
      },
    });
  };
};
