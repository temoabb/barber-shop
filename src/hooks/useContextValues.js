import { useContext } from "react";
import { Context } from "../store/Context";

const useContextValues = () => {
  const { email, loggedIn, activateUser, logOut } = useContext(Context);

  return {
    email,
    loggedIn,
    activateUser,
    logOut,
  };
};

export default useContextValues;
