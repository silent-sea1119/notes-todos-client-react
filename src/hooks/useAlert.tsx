import React from "react";
import { AuthAlertType } from "types/UserTypes";

const useAlert = (): [AuthAlertType, any] => {
  const [alertState, setAlertState] = React.useState<AuthAlertType>({
    message: null,
    status: "error",
  });

  const setAlert = (message: string, status: string): void =>
    setAlertState({ message, status });

  return [alertState, setAlert];
};

export default useAlert;
