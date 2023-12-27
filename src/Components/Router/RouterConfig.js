import { Route, Routes } from "react-router-dom";
import PrivateRouter from './PrivateRouter';
import LogIn from "../Pages/LogIn";
import { RouteData } from "../Router/Routes";
import { useContext } from "react";
import { NavContext } from '../Context/index';
import Sidebar from "../Common/SideNav/index";

export default function Routerconfig() {
  // const AuthContext = useContext(NavContext);
  // console.log(AuthContext);
  return (
    <>
      <Routes>
        {RouteData.map(({ route, Component, isPublic }) => {
          return (
            <>
              {isPublic ? (
                <Route path={route} Component={Component} />
              ) : (
                <>
                  {/* <Route element={<PrivateRouter />}> */}
                    <Route key={route} element={<Sidebar />}>
                      <Route path={route} Component={Component} />
                    </Route>
                  {/* </Route> */}
                  <Route path="/login" Component={<LogIn />} />
                </>
              )}
            </>
          );
        })}
      </Routes>
    </>
  );
}
