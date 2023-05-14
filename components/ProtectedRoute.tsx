import { useEffect } from "react";
import usersData from "../config/config.json";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }: any) => {
  useEffect(() => {
    const isAuthenticated = Cookies.get("isAuthenticated");
    if (!isAuthenticated) {
      window.location.href = "/signin";
    }
  }, []);

  return children;
};

export default ProtectedRoute;
