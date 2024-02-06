import { onValue, ref } from "firebase/database";
import { db } from "../../Firebase";

export const FetchRecentPoll = async () => {
  try {
    const snapshot = ref(db, "RECENTS");
    const recents = await new Promise((resolve) => {
      onValue(snapshot, (recentdata) => {
        if (!recentdata) {
          resolve([]);
        } else {
          const recentPromise = Object.entries(recentdata.val()).map(
            async (data, index) => data
          );
          Promise.all(recentPromise).then((recentarray) => {
            resolve(recentarray);
          });
        }
      });
    });
    const reversedpoll=recents.reverse();
    const recentpolls = reversedpoll.map(async (rpoll) => {
      const robj = rpoll[1];
      const snapshot = ref(db, `POLLING/${robj.category}/${robj.poll_id}`);
      const poll = await new Promise((resolve) => {
        onValue(snapshot, (res) => {
          resolve(res.val());
        });
      });
      return poll;
    });
    const rpolls = Promise.all(recentpolls).then((rpollarray) => {
      return rpollarray;
    });
    return rpolls;
  } catch (error) {
    console.log("Error fetching Recent Polls", error);
  }
};
