import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingIndicator from "./components/LoadingIndicator";
import Landing from "./containers/Landing";
import ErrorBoundary from "./containers/ErrorBoundary";


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

            </Routes>
            <LoadingIndicator loading={isLoading} />
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
