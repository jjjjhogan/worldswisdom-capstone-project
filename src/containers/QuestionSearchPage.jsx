import React from "react";
import QuestionSearch from "../containers/QuestionSearch";
import { useSearchParams } from 'react-router-dom';


export default function QuestionSearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  return (
    <div className="d-flex flex-column inner-height landing">
      <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>Most similar to "{searchQuery}"</h1>
            <h3>Don't see your question below? <button type="button" className="btn btn-primary">Post Question</button></h3>
          </div>
          <QuestionSearch searchQuery={searchQuery}/>
        </div>
      </div>
    </div>
  );
}