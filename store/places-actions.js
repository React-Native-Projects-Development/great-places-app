import * as FileSystem from "expo-file-system";

export const ADD_PLACE = "ADD_PLACE";
import { insertPlace } from "../helpers/db";

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

      const dbResult = await insertPlace(
        title,
        newPath,
        "Dummy Address",
        15.6,
        12.3
      );

      console.log(dbResult);

      dispatch({
        type: ADD_PLACE,
        placeData: {
          id: dbResult.insertId,
          title: title,
          image: newPath,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
