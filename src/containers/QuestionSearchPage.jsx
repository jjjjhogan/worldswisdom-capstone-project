import React from "react";
import QuestionSearch from "../containers/QuestionSearch";


export default function QuestionSearchPage() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <QuestionSearch/>
          </div>
        </div>
      </div>
    );
  }