import React from "react";
import QuestionSearch from "../containers/QuestionSearch";
import { useSearchParams, useNavigate } from 'react-router-dom';


export default function QuestionSearchPage() {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const navigate = useNavigate();
  const clickNewQuestion = () => {
    navigate("/questionpost");
  }


  return (
    <div className="d-flex flex-column">
      <div className="container py-1 flex-grow-1 text-center justify-content-center" style={{ width: "80%" }}>
        <div>
          <div style={{ textAlign: "center" }}>
            <h3>Search Results for "{searchQuery}"</h3>
            <h4>Don't see your question below? <button type="button" className="btn btn-primary" onClick={clickNewQuestion}>Post Question</button></h4>
          </div>
          <QuestionSearch searchQuery={searchQuery}/>
        </div>
      </div>
    </div>
  );
}