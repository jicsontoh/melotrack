import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
// import ErrorModal from "../shared/UIElements/ErrorModal";

import { AuthContext } from "../shared/context/auth-context";
// import { useHttpClient } from "../shared/hooks/http-hook";

import melo from "../assets/melo3.png";

import "./AuthPage.css";

const AuthPage = (props) => {
  const history = useNavigate();
  const auth = useContext(AuthContext);
  // const { isLoading, error, sendRequest, clearError } = useHttpClient();

  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // const onChange = (e) =>
  //   setFormData({ ...formData, [e.target.name]: e.target.value });

  // const { username, password } = formData;

  // const authSubmitHandler = async (event) => {
  //   event.preventDefault();

  //   if (props.action === "Log in") {
  //     try {
  //       const responseData = await sendRequest(
  //         process.env.REACT_APP_API_URL + "/api/admin/login",
  //         "POST",
  //         JSON.stringify({
  //           username: username.trim(),
  //           password: password,
  //         }),
  //         {
  //           "Content-Type": "application/json",
  //         }
  //       );
  //       auth.login(responseData.user.username, responseData.token);
  //       history("/");
  //     } catch (err) {}
  //   }
  // };

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />} */}
      <div className="auth-page">
        <div className="form-container">
          <img src={melo} height={150} width={150} />
          <form className="login-form" onSubmit={null}>
            <div className="form-row">
              <label className="form-label">Username</label>
              <input
                className="form-input"
                type="text"
                name="username"
                // value={username}
                // onChange={(e) => onChange(e)}
                id="username"
                required
              />
            </div>
            <div className="form-row">
              <label className="form-label">Password</label>
              <input
                className="form-input"
                type="password"
                name="password"
                // value={password}
                // onChange={(e) => onChange(e)}
                id="password"
                required
              />
            </div>
            <div className="form-row">
              <button
                className="login-button"
                id="submit-button"
                name="submit-button"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthPage;
