import React, { createContext, useState } from "react";

export const Context = createContext({
  email: String,
  loggedIn: Boolean,
  activateUser: () => {},
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

  const contextValues = {
    loggedIn: activateLoginStatus.loggedIn,
    email: activateLoginStatus.email,
    activateUser,
  };

  return <Context.Provider value={contextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
