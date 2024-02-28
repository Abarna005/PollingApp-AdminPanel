import { onValue, ref } from "firebase/database";
import { db } from "../../Firebase";


const DataFetch = async (category,poll_id) => {
    try {
        const pollsfromdb=await new Promise((resolve)=>{
            onValue(ref(db,`POLLING/${category}/${poll_id}`),(res)=>{
                resolve(res.val());
            })

        })
        return pollsfromdb;
    } catch (error) {
        console.log("error fetchinig data",error);
    }
};

export const FetchPopular = async () => {
  const popularsnapshot = ref(db, "Popular");
  const popdata = await new Promise((resolve) => {
    onValue(popularsnapshot, (res) => {
      resolve(res.val());
    });
  });

  const category = await new Promise((resolve) => {
    onValue(ref(db, "POLLING"), (res) => {
      resolve(res.val());
    });
  });

  if (popdata !== null && category !== null) {
    const popObject = Object.entries(popdata)
      .sort((a, b) => b[1][0] - a[1][0])
      .map(async ([poll_id]) => {
        const fetchedData = await Promise.all(
          Object.keys(category)?.map(async (item) => {
            const val = await DataFetch(item, poll_id);
            return val;
          })
        );
        return fetchedData;
      });
    
    const fetchResults=await Promise.all(popObject);
    console.log(fetchResults);

    const removenull=(arr)=>arr.filter(item=>item!==null);

    const ppolls=fetchResults.map(innerArray=>removenull(innerArray));
    return ppolls.filter((res)=>res.length>0).flat();
  }
  else
  {
    console.log("no data found");
  }
  
};


