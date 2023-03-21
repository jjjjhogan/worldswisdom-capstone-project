import { React, useState, useEffect} from "react";
import QuestionDisplay from "./Question_display"

// props.questions = [questionObj1, questionObj2, etc]
export default function QuestionsDisplay( {searchQuery, questions} ){

    return (
      <div>
        {questions.map((question, index) => (
          <div key={index}>
            <QuestionDisplay question={question}></QuestionDisplay>
          </div>
        ))}
      </div>
    );
    }