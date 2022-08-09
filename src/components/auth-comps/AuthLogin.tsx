import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { loginUser } from "store/generalSlice/sliceGetters";
import { AuthAlert } from "components";

const AuthLogin = () => {
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [alert, setAlert] = useAlert();
  const handleClick = useBtnClick(btnRef.current);

  React.useEffect(() => {
    setIsDisabled(email && password.length >= 6 ? false : true);
  }, [email, password]);

  // HANDLE USER LOGIN REQUEST
  const handleUserLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleClick("Please wait...");
    let userPayload = { email, password };

    try {
      let response = await dispatch(loginUser(userPayload)).unwrap();
      handleClick("Login", false);

      if (response.code === 200) {
        setAlert(response.message, response.status);
        setTimeout(() => (window.location.href = "/"), 1000);
      } else {
        setAlert(response.error, response.status);
      }
    } catch (err) {
      handleClick("Login", false);
      console.log(err);
    }
  };

  return (
    <div>
      {/* AUTH ALERT BLOCK */}
      <AuthAlert alert={alert} />

      <form action="" onSubmit={handleUserLogin}>
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
          type="submit"
          className="btn btn-green w-100 pdy-16 mx-auto"
          disabled={isDisabled}
          ref={btnRef}
        >
          Login
        </button>
      </form>

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
