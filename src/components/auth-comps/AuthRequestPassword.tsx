import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { requestUserPassword } from "store/authSlice/sliceGetters";
import { AuthAlert } from "components";

const AuthRequestPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [email, setEmail] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [alert, setAlert] = useAlert();
  const handleClick = useBtnClick(btnRef.current);

  React.useEffect(() => setIsDisabled(email ? false : true), [email]);

  // HANDLE USER PASSWORD REQUEST
  const handlePasswordRequest = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleClick("Please wait...");
    let userPayload = { email };

    try {
      let response = await dispatch(requestUserPassword(userPayload)).unwrap();
      handleClick("Reset Password", false);

      if (response.code === 200) {
        setAlert(response.message, response.status);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setAlert(response.error, response.status);
      }
    } catch (err) {
      handleClick("Reset Password", false);
      console.log(err);
    }
  };

  return (
    <div>
      {/* AUTH ALERT BLOCK */}
      <AuthAlert alert={alert} />

      <form action="" onSubmit={handlePasswordRequest}>
        {/* EMAIL */}
        <div className="form-group">
          <label htmlFor="email" className="control-label">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="Email Address"
            onChange={(e) => setEmail(e?.target?.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="btn btn-green w-100 pdy-16 mx-auto"
          ref={btnRef}
        >
          Reset Password
        </button>
      </form>

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgt-15 text-center">
        Remember your password now?
        <NavLink to="/login" className="btn-link mgl-3">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthRequestPassword;
