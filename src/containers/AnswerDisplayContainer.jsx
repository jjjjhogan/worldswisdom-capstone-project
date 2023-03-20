import React from "react";
import AnswerDisplay from "../components/AnswerDisplay";


export default function Question_display_container(props) {

    return (
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <AnswerDisplay url={props.url}/>
          </div>

          </div>

    );
  }