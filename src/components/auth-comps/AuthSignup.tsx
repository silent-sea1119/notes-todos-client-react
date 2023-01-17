import React from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "hooks/storeHook";
import { useAlert, useBtnClick } from "hooks";
import { signupUser } from "store/authSlice/sliceGetters";
import { AuthAlert } from "components";

const AuthSignup = () => {
  const dispatch = useAppDispatch();
  const btnRef = React.useRef<HTMLButtonElement>(null);

  const [fullname, setFullname] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [alert, setAlert] = useAlert();
  const handleClick = useBtnClick(btnRef.current);

  React.useEffect(() => {
    setIsDisabled(fullname && email && password.length >= 6 ? false : true);
  }, [fullname, email, password]);

  // HANDLE USER SIGNUP REQUEST
  const handleUserSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // CHECK FULL NAME LENGTH
    if (fullname.split(" ").length !== 2) {
      setAlert("Fullname must contain first and lastname", "error");
      return false;
    }

    handleClick("Please wait...");
    let splittedFullname = fullname.split(" ");
    let userPayload = {
      firstName: splittedFullname[0],
      lastName: splittedFullname[1],
      email,
      password,
    };

    try {
      let response = await dispatch(signupUser(userPayload)).unwrap();
      handleClick("Register", false);

      if (response.code === 200) {
        setAlert(response.message, response.status);
        setTimeout(() => (window.location.href = "/"), 1000);
      } else {
        setAlert(response.error, response.status);
      }
    } catch (err) {
      handleClick("Register", false);
      console.log(err);
    }
  };

  return (
    <div>
      {/* AUTH ALERT BLOCK */}
      <AuthAlert alert={alert} />

      <form action="" onSubmit={handleUserSignup}>
        {/* FULL NAME */}
        <div className="form-group">
          <label htmlFor="fullName" className="control-label">
            Full Name
          </label>
          <input
            type="text"
            value={fullname}
            className="form-control"
            placeholder="Richy Jones"
            onChange={(e) => setFullname(e?.target?.value)}
          />
        </div>

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
          Already have an account?
          <NavLink to="/login" className="btn-link mgl-3">
            Login
          </NavLink>
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="btn btn-green w-100 pdy-16 mx-auto"
          ref={btnRef}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default AuthSignup;
