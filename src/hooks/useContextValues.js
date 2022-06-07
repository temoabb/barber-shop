import { useContext } from "react";
import { Context } from "../store/Context";

const useContextValues = () => {
  const { email, loggedIn, activateUser, fetchedBarbers, setFetchedBarbers } =
    useContext(Context);

  return {
    email,
    loggedIn,
    activateUser,
    fetchedBarbers,
    setFetchedBarbers,
  };
};

export default useContextValues;
