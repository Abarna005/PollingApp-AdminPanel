import { useState, useEffect, useContext } from "react";
import { createContext } from "react";

export const NavContext = createContext({
  storeMailId: "",
  setStoreMailId: () => {},
});

function NavContextProvider({ children }) {
  const [storeMailId, setStoreMailId] = useState(
    localStorage.getItem("mailId")
  );

  useEffect(() => {}, []);
  useEffect(() => {
    console.log("once state update", storeMailId);
  }, [storeMailId]);
  return (
    <NavContext.Provider
      value={{
        storeMailId,
        setStoreMailId: setStoreMailId,
      }}
    >
      {children}
    </NavContext.Provider>
  );
}

export default NavContextProvider;
