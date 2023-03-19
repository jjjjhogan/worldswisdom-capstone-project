import React from "react";
import Question_display from "../components/Question_display";
import profile from "../components/profile.png";
import ReactPlayer from 'react-player';


export default function Question_display_container() {

    return (
        
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
          <Question_display category = {"History"} text = {"Example question text?"}/>
          </div>
        </div>

        <div>
          <ReactPlayer url={process.env.REACT_APP_S3_BASE_PATH + '1679203307396'} controls={true}/>
        </div>
      </div>
    );
  }