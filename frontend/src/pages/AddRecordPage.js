import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
// import ErrorModal from "../shared/UIElements/ErrorModal";

import { AuthContext } from "../shared/context/auth-context";
import { useHttpClient } from "../shared/hooks/http-hook";

import "./AuthPage.css";

const AddRecordPage = (props) => {
  const history = useNavigate();
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [value, onChange] = useState(new Date());
  const [country, setCountry] = useState("");

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      // start date value[0]; end date value[1]
      alert(value[1]);
      alert(country);
      // const responseData = await sendRequest(
      //   process.env.REACT_APP_API_URL + "/api/admin/login",
      //   "POST",
      //   JSON.stringify({
      //     username: username.trim(),
      //     password: password,
      //   }),
      //   {
      //     "Content-Type": "application/json",
      //   }
      // );
      // auth.login(responseData.user.username, responseData.token);
    } catch (err) {}
  };

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />} */}
      <div className="auth-page">
        <div className="form-container">
          <form className="login" onSubmit={authSubmitHandler}>
            <div className="form-row">
              <label className="form-label">Select Date not in SG</label>
              <Calendar onChange={onChange} value={value} selectRange={true} />
            </div>
            <div className="form-row">
              <label className="form-label">Country</label>
              <input
                className="form-input"
                type="text"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                id="country"
                required
              />
            </div>
            <div className="form-row">
              <button
                className="login-button"
                id="submit-button"
                name="submit-button"
              >
                Add Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddRecordPage;
