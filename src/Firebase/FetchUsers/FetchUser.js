import { onValue, ref, update } from "firebase/database";
import { db } from "../../Firebase";

export const FetchUsers = async () => {
  try {
    const snapshot = ref(db, "USER");
    const users = await new Promise((resolve) => {
      onValue(snapshot, (userdata) => {
        if (!userdata) {
          resolve([]);
        } else {
          const userPromises = Object.entries(userdata.val()).map(
            async (data, index) => {
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

export const BlockUser = async (uid) => {
  try {
    const blockuser = {};
    blockuser[`USER/${uid}/block`] = true;
    await update(ref(db), blockuser);
    return "User Blocked!";
  } catch (error) {
    console.log("Error blocking user", error);
  }
};
