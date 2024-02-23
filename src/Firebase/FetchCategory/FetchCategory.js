import { onValue, ref } from "firebase/database";
import { db } from "../../Firebase";

export const FetchCategory = async () => {
  try {
    const snapshot = ref(db, "category");
    const categories = await new Promise((resolve) => {
      onValue(snapshot, (catdata) => {
        if (!catdata) {
          resolve([]);
        } else {
          const catPromises = Object.entries(catdata.val()).map(
            async (data) => data[1]
          );

          Promise.all(catPromises).then((catarray) => {
            resolve(catarray);
          });
        }
      });
    });
    return categories;
  } catch (error) {
    console.log("Error fetching categories", error);
  }
};
