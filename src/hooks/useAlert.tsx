import React from "react";
import { AuthAlertTypes } from "types/UserTypes";

const useAlert = (): [AuthAlertTypes, any] => {
  const [alertState, setAlertState] = React.useState<AuthAlertTypes>({
    message: null,
    status: "error",
  });

  const setAlert = (message: string, status: string) => {
    setAlertState({ message, status });
    setTimeout(() => setAlertState({ message: null, status: "error" }), 4000);
  };

  return [alertState, setAlert];
};

export default useAlert;
