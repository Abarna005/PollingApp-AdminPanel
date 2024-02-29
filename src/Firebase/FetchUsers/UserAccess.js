import { ref, remove, update } from "firebase/database";
import { db } from "../../Firebase";

export const GrantUser = async (uid) => {
  try {
    const canPost = {};
    canPost[`USER/${uid}/canPost`] = true;
    await update(ref(db), canPost);
    const rem = await remove(ref(db, `PostAccessRequests/${uid}`));
    console.log(rem);
    return "User access to post has given";
  } catch (error) {
    console.log("Error granting access", error);
  }
};

export const RevokeUser = async (uid) => {
  try {
    const canPost = {};
    canPost[`USER/${uid}/canPost`] = "revoked";
    await update(ref(db), canPost);
    const rem = await remove(ref(db, `PostAccessRequests/${uid}`));
    console.log(rem);
    return "User access revoked successfully";
  } catch (error) {
    console.log("Error revoking access", error);
  }
};

export const BlockUser = async (uid) => {
  try {
    const blockuser = {};
    blockuser[`USER/${uid}/block`] = true;
    await update(ref(db), blockuser);
    const rem = await remove(ref(db, `PostAccessRequests/${uid}`));
    console.log(rem);
    return "User Blocked!";
  } catch (error) {
    console.log("Error blocking user", error);
  }
};
