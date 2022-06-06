import { useContext } from "react";
import { Context } from "../store/Context"

const useContextValues = () => {
  const { email, loggedIn, activateUser } = useContext(Context);

  return {
    email,
    loggedIn,
    activateUser
  }

};


export default useContextValues;