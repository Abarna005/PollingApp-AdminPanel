import { onValue, ref, update } from "firebase/database";
import { db } from "../../Firebase";

export const FetchUsers = async () => {
  try {
    const snapshot = ref(db, "PostAccessRequests");
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
    return users;
  } catch (e) {
    console.log("Error fetching users", e);
  }
};
