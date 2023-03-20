import React from "react";
import QuestionAnswer from "../components/AnswerDisplay";
import Question_display_container from "./Question_display_container"

export default function Landing() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
            <div>
                <Question_display_container/>
            </div>
            <QuestionAnswer url = {'1679203307396'}/>
        </div>
      </div>
    );
  }
  