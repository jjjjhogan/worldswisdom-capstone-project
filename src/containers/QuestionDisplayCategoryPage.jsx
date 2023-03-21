import React from "react";
import QuestionDisplayCategoryContainer from "./QuestionDisplayCategoryContainer"

export default function Landing() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
            <div>
                <QuestionDisplayCategoryContainer/>
            </div>
        </div>
      </div>
    );
  }
  