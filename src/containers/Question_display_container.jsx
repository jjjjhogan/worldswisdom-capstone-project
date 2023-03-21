import React from "react";
import Question_display from "../components/Question_display";
import { useNavigate } from "react-router-dom";
export default function Question_display_container() {
  const navigate = useNavigate();
  const onQuestionClick = (event) => {
    event.preventDefault();
    const searchQuery = "?questionid=" + event.target.textContent;
    navigate({pathname: "/questiondisplay", search: searchQuery});
  };
  return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
            <Question_display onClick={onQuestionClick}/>
          </div>
        </div>
      </div>
    );
  }