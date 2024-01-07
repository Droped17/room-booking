import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "../utils/local_storage";
import axios from "../config/axios";

export const AuthenContext = createContext();

export default function AuthenContextProvider({ children }) {
  const [authStatus, setAuthStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/authen/me")
        .then((res) => setAuthStatus(res.data.user))
        .catch((e) => console.log(e))
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const login = async (credential) => {
    const res = await axios.post("/authen/login", credential);
    setAccessToken(res.data.accessToken);
    setAuthStatus(res.data.user);
  };

  const register = async (registerInputObj) => {
    const res = await axios.post("/authen/register", registerInputObj);
    setAccessToken(res.data.accessToken);
    setAuthStatus(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setAuthStatus(null);
  };

  return (
    <AuthenContext.Provider
      value={{ authStatus, login, logout, register, loading }}
    >
      {children}
    </AuthenContext.Provider>
  );
}
