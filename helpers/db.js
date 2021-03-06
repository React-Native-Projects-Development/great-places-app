import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    // A transaction guarantees that your query is executed as a whole and if a part fails the entire query is rolled back.
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, imageUri TEXT NOT NULL, address TEXT NOT NULL, lat REAL NOT NULL, lng REAL NOT NULL);",
        [],
        // success function
        () => {
          resolve();
        },
        // error function
        // 1st arg = query executed, adding _ you signal that you don't care about it
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (title, imageUri, address, lat, lng) => {
  const promise = new Promise((resolve, reject) => {
    // A transaction guarantees that your query is executed as a whole and if a part fails the entire query is rolled back.
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?,?,?,?,?)`,
        [title, imageUri, address, lat, lng],
        // success function
        (_, result) => {
          resolve(result);
        },
        // error function
        // 1st arg = query executed, adding _ you signal that you don't care about it
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    // A transaction guarantees that your query is executed as a whole and if a part fails the entire query is rolled back.
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        // success function
        (_, result) => {
          resolve(result);
        },
        // error function
        // 1st arg = query executed, adding _ you signal that you don't care about it
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};
