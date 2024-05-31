import { createContext, useContext } from "react";
import { useCookies, Cookies } from "react-cookie";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const namecookies = "testcookise";
  const classcookies = new Cookies();

  const [cookies, setCookies, removeCookie] = useCookies([namecookies]);
  !(classcookies.get(namecookies) === undefined) &&
    console.log(
      `cookise has addend ${JSON.stringify(classcookies.get(namecookies))}`
    );
  // func
  const login = (userId, passwordId) => {
    setCookies(
      [namecookies],
      {
        userId: userId,
        passwordId: passwordId,
      },
      { path: "/" }
    );
  };

  const logout = () => {
    removeCookie([namecookies]);
  };

  const getUserId = () => {
    return !(classcookies.get(namecookies) === undefined)
      ? classcookies.get(namecookies).userId
      : "";
  };

  return (
    <AuthContext.Provider value={{ cookies, login, logout, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
