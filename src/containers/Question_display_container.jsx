import React from "react";
import Question_display from "../components/Question_display";
export default function Question_display_container() {
  return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
            <Question_display/>
          </div>
        </div>
      </div>
    );
  }