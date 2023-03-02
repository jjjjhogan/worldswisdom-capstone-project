import React from "react";
import ImgOverlay from "../components/ImgOverlay";

export default function containBigCard() {

    return (
      <div>
        <ImgOverlay
        dimension="350px"
        text="History"
        imageSrc="https://example.com/book.jpg"
        linkTo="https://example.com/history-questions"
        />
      </div>
    );
} 