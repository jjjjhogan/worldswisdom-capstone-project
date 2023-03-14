import React from "react"

export default function QuestionDisplay( props ){
    return (

        <div className="bg-light border">
        <div className ="questionProfile">
          <img src={props.image}></img>
            <p>{props.user}</p>
        </div>
        <div className="questionText">
          <p>{props.text}</p>
          <button type="button" className="btn btn-light btn-sm">reply</button>
        </div>

        </div>
        
      );
    }
