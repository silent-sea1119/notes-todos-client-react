import { useAppSelector } from "hooks/storeHook";
import { getGeneral } from "store/generalSlice/sliceGetters";

const useAuth = (): any => {
  const { auth_user } = useAppSelector(getGeneral);
  return auth_user;
};

export default useAuth;
