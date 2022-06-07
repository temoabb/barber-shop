import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({
  email: String,
  loggedIn: Boolean,
  activateUser: () => {},
  logOut: () => {},
});

const initState = () => {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : {
        loggedIn: false,
        email: "",
      };
};

const ContextProvider = ({ children }) => {
  const [activateLoginStatus, setActivateLoginStatus] = useState(initState());

  const activateUser = (data) => setActivateLoginStatus(data);

  const navigate = useNavigate("");

  const logOut = () => {
    localStorage.removeItem("user");
    setActivateLoginStatus({ loggedIn: false, email: "" });
    navigate("/login");
  };

  const contextValues = {
    loggedIn: activateLoginStatus.loggedIn,
    email: activateLoginStatus.email,
    activateUser,
    logOut,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
