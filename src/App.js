import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import Landing from "./containers/Landing";
import ErrorBoundary from "./containers/ErrorBoundary";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import RegisterPage2 from "./containers/RegisterPage2";
import RegisterPage3 from "./containers/RegisterPage3";
import NavBar from "./components/Navbar";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <ErrorBoundary>
        <Suspense fallback="loading">
          <NavBar />
          <Router>
              <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Landing/>}></Route>
                <Route path={`${process.env.PUBLIC_URL}/login`} element={<LoginPage />} />
                <Route path={`${process.env.PUBLIC_URL}/register`} element={<RegisterPage />} />
                <Route path={`${process.env.PUBLIC_URL}/register2`} element={<RegisterPage2 />} />
                <Route path={`${process.env.PUBLIC_URL}/register3`} element={<RegisterPage3 />} />
              </Routes>
              <LoadingIndicator loading={isLoading} />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </GoogleOAuthProvider>
  );
}

export default App;
