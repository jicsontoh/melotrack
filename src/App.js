import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Auth from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";

const App = () => {
  const { token, login, logout, userId } = useAuth();
  let routes;

  if (token) {
    routes = (
      <React.Fragment>
        {/* <Route path="/" element={<Users />} /> */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate replace to="/auth" />} />
      </React.Fragment>
    );
  }

  return (
    // <AuthContext.Provider
    //   value={{
    //     isLoggedIn: !!token,
    //     userId: userId,
    //     token: token,
    //     login: login,
    //     logout: logout,
    //   }}
    // >
    <BrowserRouter>
      <MainNavigation />
      <main>
        <Routes>{routes}</Routes>
      </main>
    </BrowserRouter>
    // </AuthContext.Provider>
  );
};

export default App;
