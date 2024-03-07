import { ref, update } from "firebase/database";
import { db } from "../../Firebase";

export const GrantSuperUser = async (uid) => {
  try {
    const isSuperUser = {};
    isSuperUser[`USER/${uid}/isSuperUser`] = true;
    await update(ref(db), isSuperUser);
    console.log("Access granted sucessfully");
  } catch (error) {
    console.log("Error giving access to user");
  }
};

export const RejectSuperUser = async (uid) => {
  try {
    const isSuperUser = {};
    isSuperUser[`USER/${uid}/isSuperUser`] = "rejected";
    await update(ref(db), isSuperUser);
    console.log("Access Rejected!");
  } catch (error) {
    console.log("Error rejecting super user", error);
  }
};
