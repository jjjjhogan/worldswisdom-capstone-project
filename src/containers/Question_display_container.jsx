import React from "react";
import Question_display from "../components/Question_display";
import profile from "../components/profile.png";
import ReactPlayer from 'react-player';


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