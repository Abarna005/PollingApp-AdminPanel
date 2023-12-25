import React from "react";
import RouterConfig from './Components/Router/RouterConfig';
import "bootstrap/dist/css/bootstrap.min.css";
import NavContextProvider from './Components/Context/index';

function App() {
  return (
    <>
      <NavContextProvider>
        <RouterConfig />
      </NavContextProvider>
    </>
  );
}
export default App;