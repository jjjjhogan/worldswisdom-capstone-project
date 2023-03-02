import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import Landing from "./containers/Landing";
import ErrorBoundary from "./containers/ErrorBoundary";
import CommonCard from "./containers/cardContainer";
import ContainBigCard from "./containers/cardContainerBig";
import CommonBadge from "./containers/BadgeContainer";
import Wisdom_container from "./containers/Wisdom_container";
import Register_container from "./containers/Register_container";
import Register_categories_container from "./containers/Register_categories_container";
import Question_answer_container from "./containers/Question_answer_container";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <ErrorBoundary>
      <Suspense fallback="loading">
        <Router
          basename={
            process.env.NODE_ENV === "development" ? "/worlds-wisdom" : "/"
          }
        >
          <div>
            <Routes>
              <Route path={`${process.env.PUBLIC_URL}/`} element={<Register_container/>}></Route>
              
            </Routes>
            <LoadingIndicator loading={isLoading} />
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
