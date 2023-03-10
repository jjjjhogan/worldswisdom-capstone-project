import React from "react";
import ImgOverlay from "../components/ImgOverlay";

export default function CardContainer( props ) {

    return (
      <div>
        <ImgOverlay
        dimension="150px" //height, width
        text={props.text}
        imageSrc=`./path/{props.text}.jpg` //take parameter
        linkTo="https://example.com/history-questions"
        />
      </div>
    );
} 