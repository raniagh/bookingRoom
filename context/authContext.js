"use client";

import { useState, createContext, useEffect, useContext } from "react";
import checkAuth from "../app/actions/checkAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentuser] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const { isAuth, user } = await checkAuth();
      setIsAuthenticated(isAuth);
      setCurrentuser(user);
    };
    checkAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        currentUser,
        setCurrentuser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
