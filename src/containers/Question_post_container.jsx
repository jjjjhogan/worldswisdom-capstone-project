import React from "react";
import Question_post from "../components/Question_post";
import "../components/Question_post_style.css"
export default function Question_post_container() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container-fluid text-center d-flex flex-column justify-content-center">
          <div>
          </div>
          <Question_post />
        </div>
        <div>
       
        </div>
      </div>
    );
  }
  