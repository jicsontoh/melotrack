import React, { useContext, useState, useEffect } from "react";
// import SideBar from "../shared/serviceline/Sidebar";
// import Announcement from "../shared/announcement/Announcement";
// import { useHttpClient } from "../shared/hooks/http-hook";

// import ErrorModal from "../shared/UIElements/ErrorModal";
// import LoadingSpinner from "../shared/UIElements/LoadingSpinner";
import { AuthContext } from "../shared/context/auth-context";

import "./HomePage.css";

const HomePage = (props) => {
  const auth = useContext(AuthContext);
  //   const [loadedAnnounce, setLoadedAnnounce] = useState();
  //   const { isLoading, error, sendRequest, clearError } = useHttpClient();

  //   useEffect(() => {
  //     const fetchAnnouce = async () => {
  //       try {
  //         const responseData = await sendRequest(
  //           process.env.REACT_APP_API_URL + `/api/announcements`
  //         );

  //         setLoadedAnnounce(responseData.announcement);
  //       } catch (err) {}
  //     };
  //     fetchAnnouce();
  //   }, [sendRequest]);

  return (
    <React.Fragment>
      {/* <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />} */}
      <section class="section">
        <div class="container">
          {!auth.isLoggedIn && (
            <img
              alt="melorun"
              width="700"
              height="660"
              src="https://mustsharenews.com/wp-content/uploads/2019/01/my-melody-running-gif.gif"
            ></img>
          )}
          {auth.isLoggedIn && (
            <React.Fragment>
              <div className="form-container">
                <h1>Number of Days in SG:</h1>
                <h2>259</h2>
              </div>
            </React.Fragment>
          )}
          {/* <SideBar />
            {!isLoading && <Announcement items={loadedAnnounce} />} */}
        </div>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
