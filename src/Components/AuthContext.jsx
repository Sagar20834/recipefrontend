import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
    setIsLoggedIn(loggedIn || false);

    const handleUnload = () => {
      localStorage.setItem("loggedIn", JSON.stringify(false));
      setIsLoggedIn(false);
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  const login = () => {
    localStorage.setItem("loggedIn", JSON.stringify(true));
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem("loggedIn", JSON.stringify(false));
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
