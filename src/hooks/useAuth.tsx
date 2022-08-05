import React from "react";

const useAuth = (): any => {
  const [payload, setPayload] = React.useState<Object | string>();

  const getUserPayload = React.useCallback(() => {
      // @ts-ignore
      setPayload(JSON.parse(localStorage.getItem('NothyAuthPayload')));
  }
  , []);

  React.useEffect(() => getUserPayload(), [getUserPayload])

  return payload;
};

export default useAuth;
