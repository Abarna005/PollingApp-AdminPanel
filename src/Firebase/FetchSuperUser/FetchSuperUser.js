import { onValue, ref } from "firebase/database";
import { db } from "../../Firebase";

export const FetchSuperUser = async () => {
  try {
    const snapshot = ref(db, "USER");
    const users = await new Promise((resolve) => {
      onValue(snapshot, (userdata) => {
        if (!userdata.exists()) {
          resolve([]);
        } else {
          const userPromises = Object.entries(userdata.val()).map(
            async (data) => {
              return data[1];
            }
          );
          Promise.all(userPromises).then((userarray) => {
            resolve(userarray);
          });
        }
      });
    });
    return users.filter((item) => item.isSuperUser === false);
  } catch (e) {
    console.log("Error fetching users", e);
  }
};
