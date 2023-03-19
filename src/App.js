import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import Landing from "./containers/Landing";
import ErrorBoundary from "./containers/ErrorBoundary";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import NavBar from "./components/Navbar";
import Question_post_container from "./containers/Question_post_container";
import { GoogleOAuthProvider } from '@react-oauth/google';
import QuestionAnswerPage from "./containers/QuestionAnswerPage";
import QuestionPostPage from "./containers/QuestionPostPage";
import AnswerDisplayPage from "./containers/AnswerDisplayPage";

import Test from "./Test";

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
                <Route path={`${process.env.PUBLIC_URL}/questionanswer`} element={<QuestionAnswerPage />} />
                <Route path={`${process.env.PUBLIC_URL}/questionpost`} element={<QuestionPostPage />} />
                <Route path={`${process.env.PUBLIC_URL}/answerdisplay`} element={<AnswerDisplayPage />} />
                <Route path={`${process.env.PUBLIC_URL}/testUpload`} element={<Test/>}></Route>

              </Routes>
              <LoadingIndicator loading={isLoading} />
          </Router>
        </Suspense>
      </ErrorBoundary>
    </GoogleOAuthProvider>
  );
}

export default App;
