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
        <div className="card " role="button">
          <div className="questionCat d-flex"> 
            <span className="badge rounded-pill bg-primary ">{question.categories}</span>
          </div>
          <div className="questionText card-title ">
            <h5>{question.questionText}</h5>
          </div>
        </div>
        <br/>
    </div>
  );
}