import React from "react";
import { AuthAlertType } from "types/UserTypes";
import "./AuthWrapper.scss";

type AlertType = {
  alert: AuthAlertType;
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
