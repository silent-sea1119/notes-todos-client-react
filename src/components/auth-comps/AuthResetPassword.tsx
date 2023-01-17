import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { resetUserPassword } from "store/authSlice/sliceGetters";
import { AuthAlert } from "components";

const AuthResetPassword = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [alert, setAlert] = useAlert();
  const handleClick = useBtnClick(btnRef.current);

  React.useEffect(() => {
    setIsDisabled(
      password.length >= 6 && confirmPassword.length >= 6 ? false : true
    );
  }, [password, confirmPassword]);

  // CONFIRM USER PASSWORD MATCH
  const compareUserPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === confirmPassword) handlePasswordReset();
    else setAlert("Password does not match", "error");
  };

  // HANDLE USER PASSWORD RESET
  const handlePasswordReset = async () => {
    handleClick("Please wait...");
    let userPayload = { password, token: params.token };

    try {
      let response = await dispatch(resetUserPassword(userPayload)).unwrap();
      handleClick("Complete Password Reset", false);

      if (response.code === 200) {
        setAlert(response.message, response.status);
        setTimeout(() => navigate("/login"), 1500);
      } else {
        setAlert(response.error, response.status);
      }
    } catch (err) {
      handleClick("Complete Password Reset", false);
      console.log(err);
    }
  };

  return (
    <div>
      {/* AUTH ALERT BLOCK */}
      <AuthAlert alert={alert} />

      <form action="" onSubmit={compareUserPassword}>
        {/* PASSWORD ONE */}
        <div className="form-group">
          <label htmlFor="password" className="control-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e?.target?.value)}
          />
        </div>

        {/* PASSWORD TWO */}
        <div className="form-group">
          <label htmlFor="confirmPassword" className="control-label">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            className="form-control"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e?.target?.value)}
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="btn btn-green w-100 pdy-16 mx-auto"
          ref={btnRef}
        >
          Complete Password Reset
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

export default AuthResetPassword;
