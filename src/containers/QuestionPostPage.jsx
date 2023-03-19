import React from "react";
import Question_post_container from "./Question_post_container";

export default function Landing() {

    return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
            <div>
                <Question_post_container/>
            </div>
        </div>
      </div>
    );
  }
  