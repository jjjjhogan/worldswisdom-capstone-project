import React from "react";
import Question_answer from "../components/Question_answer";


export default function Question_answer_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Question_answer />
          </div>
        </div>
      </div>
    );
  }