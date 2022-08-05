import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert } from "hooks";
import { loginUser } from "store/generalSlice/sliceGetters";
import { AuthAlert } from "components";

const AuthLogin = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [alert, setAlert] = useAlert();

  React.useEffect(() => {
    setIsDisabled(email && password.length > 6 ? false : true);
  }, [email, password]);

  const handleUserLogin = async () => {
    let isDispathed = false;

    if (!isDispathed) {
      let userPayload = { email, password };
      let responsePayload = await dispatch(loginUser(userPayload));
      console.log(responsePayload?.payload);

      setAlert("Successful", "success");
    }

    return () => {
      isDispathed = true;
    };
  };

  return (
    <div>
      {/* AUTH ALERT BLOCK */}
      <AuthAlert alert={alert} />

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

      {/* PASSWORD */}
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

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgb-15 text-center">
        Don't have an account?
        <NavLink to="/signup" className="btn-link mgl-3">
          Signup
        </NavLink>
      </div>

      <button
        className="btn btn-green w-100 pdy-16 mx-auto"
        disabled={isDisabled}
        onClick={handleUserLogin}
      >
        Login
      </button>

      {/* HELP TEXT */}
      <div className="help-text color-black f-size-14 mgt-15 text-center">
        Can't remember password?
        <NavLink to="/request-password" className="btn-link mgl-3">
          Reset Now
        </NavLink>
      </div>
    </div>
  );
};

export default AuthLogin;
