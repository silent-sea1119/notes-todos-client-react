import React from "react";
import { AuthAlertTypes } from "types/UserTypes";
import "./AuthWrapper.scss";

type AlertType = {
  alert: AuthAlertTypes;
};

const AuthAlert = ({ alert: { message, status } }: AlertType) => {
  return (
    <>
      {message && (
        <div
          className={`auth-alert mgb-15 rounded-5 color-black auth-alert-${status}`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default AuthAlert;
