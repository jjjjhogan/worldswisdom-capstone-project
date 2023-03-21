import { React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function QuestionDisplay( { question } ){
  const navigate = useNavigate();
  const onQuestionClick = (event) => {
    event.preventDefault();
    const searchQuery = "?questionid=" + question._id;
    navigate({pathname: "/answerdisplay", search: searchQuery});
  };

  return (
    <div onClick={onQuestionClick}>
        <div className="bg-light border">
          <div className="questionCat">
            <button type="button" className="btn btn-light btn-sm">{question.categories}</button>
          </div>
          <div className="questionText">
            <h5>{question.questionText}</h5>
            <button type="button" className="btn btn-light btn-sm">reply</button>
          </div>
        </div>
    </div>
  );
}