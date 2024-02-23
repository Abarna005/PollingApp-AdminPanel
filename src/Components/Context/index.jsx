import { useState, useEffect, useContext } from "react";
import { createContext } from "react";

export const NavContext = createContext({
  storeMailId: "",
  setStoreMailId: () => {},
  reportedPolls:[],
  setReportedpolls:()=>{},
});

function NavContextProvider({ children }) {
  const [storeMailId, setStoreMailId] = useState(
    localStorage.getItem("mailId")
  );
  const [reportedPolls, setReportedPolls] = useState([]);

  useEffect(() => {}, []);
  useEffect(() => {
    console.log("once state update", storeMailId);
  }, [storeMailId]);
  return (
    <NavContext.Provider
      value={{
        storeMailId,
        setStoreMailId: setStoreMailId,
        reportedPolls,
        setReportedPolls
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;
