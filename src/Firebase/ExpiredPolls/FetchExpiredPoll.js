import { onValue, ref } from "firebase/database";
import { db } from "../../Firebase";

export const FetchExpiredPolls = async () => {
    try {
        const snapshot=ref(db,"RECENTS");
        const recents=await new Promise((resolve)=>{
            onValue(snapshot,(recentdata)=>{
                if(!recentdata)
                {
                    resolve([]);
                }
                else
                {
                    const recentPromise=Object.entries(recentdata.val()).map(async (data)=>data)
                    Promise.all(recentPromise).then((rarray)=>{
                        resolve(rarray);
                    })
                }
            })
        })
        const expired=recents.map(async(recent)=>{
            if(recent[1].expiryDate<Date.now())
            {
                const expirysnapshot= await new Promise((resolve)=>{
                    onValue(ref(db,`POLLING/${recent[1].category}/${recent[1].poll_id}`),(res)=>{
                        resolve(res.val());
                    })
                })
                return expirysnapshot;
            }
        });
        const expiredPolls=(await Promise.all(expired)).filter((val)=>val!==undefined);
        return expiredPolls;
        
    } catch (error) {
        console.log("Error fetching Expired Polls",error);
    }
};
