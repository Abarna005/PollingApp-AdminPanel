import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRouter() {
  const authData = localStorage.getItem("mailId");

  let auth = { token: authData ? true : false };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
