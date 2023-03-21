import React from "react";
import QuestionDisplayCategory from "../components/QuestionDisplayCategory";
export default function QuestionDisplayCategoryContainer() {
  return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
            <QuestionDisplayCategory/>
          </div>
        </div>
      </div>
    );
  }