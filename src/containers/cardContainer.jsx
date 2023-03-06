import React from "react";
import ImgOverlay from "../components/ImgOverlay";

export default function commonCard() {

    return (
      <div>
        <ImgOverlay
        dimension="150px"
        text="History"
        imageSrc="https://example.com/book.jpg"
        linkTo="https://example.com/history-questions"
        />
      </div>
    );
} 