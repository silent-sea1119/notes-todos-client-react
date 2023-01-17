// import React from "react";
import { useAppSelector } from "hooks/storeHook";
import { getAuth } from "store/authSlice/sliceGetters";

const useAuth = (): any => {
  const { auth_user } = useAppSelector(getAuth);

  // React.useEffect(() => {

  // }, [auth_user])

  return auth_user;
};

export default useAuth;
