import React from "react";
import Card from "react-bootstrap";


const CustomCard = ({ dimension, text, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card style={{ width: dimension }}>
        <Card.Img src={image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{text}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </a>
  );
};

export default CustomCard;
