import React from "react";
import { AuthAlertType } from "types/UserTypes";

const useAlert = (): [AuthAlertType, any] => {
  const [alertState, setAlertState] = React.useState<AuthAlertType>({
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
