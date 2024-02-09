import { onValue, ref, update } from "firebase/database";
import { db } from "../../Firebase";

export const FetchReportedPoll = async () => {
  try {
    const snapshot = ref(db, "Report");
    const reportedpolls = await new Promise((resolve) => {
      onValue(snapshot, (reports) => {
        if (!reports) {
          resolve([]);
        } else {
          const reportPromise = Object.entries(reports.val()).map(
            async (data) => data
          );
          Promise.all(reportPromise).then((reportarray) => {
            resolve(reportarray);
          });
        }
      });
    });
    return reportedpolls;
  } catch (error) {
    console.log("Error fetching reported polls", error);
  }
};

export const UpdateReport = async (category, poll_id) => {
  try {
    const blockpoll = {};
    blockpoll[`POLLING/${category}/${poll_id}/block`] = true;
    await update(ref(db), blockpoll);
    return "poll blocked successfully";
  } catch (error) {
    console.log("Error blocking poll", error);
  }
};
