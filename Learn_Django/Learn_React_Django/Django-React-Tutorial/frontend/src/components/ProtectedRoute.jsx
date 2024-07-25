import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  // console.log(isAuthorized);
  // console.log(localStorage.getItem(ACCESS_TOKEN));
  // console.log(localStorage.getItem(REFRESH_TOKEN));

  useEffect(() => {
    auth().catch(() => {
      setIsAuthorized(false);
    });
  }, []);

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });

      if (res.status == 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      // console.error(error);
      setIsAuthorized(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    const decode = jwtDecode(token);
    // console.log(decode);
    const tokenExpiration = decode.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) await refreshToken();
    else setIsAuthorized(true);
  };

  if (isAuthorized === null) return <div>Loading ....</div>;

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
