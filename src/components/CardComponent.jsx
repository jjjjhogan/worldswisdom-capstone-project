import React from "react";
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <Card 
      style={{ width: props.dimension, height: props.dimension }}
      onClick={props.onClick}>
      <Card.Img 
        style={{ height: props.dimension, objectFit: "cover" }}
        src={props.image} 
        alt={props.text}
        className="img-fluid rounded"
      />
      <Card.ImgOverlay>
        <Card.Text>
          <div className="d-flex justify-content-center align-items-end bg-body text-dark ">{props.text}</div>
        </Card.Text>
        <Card.Title>
          <a href={props.link}></a>
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CardComponent;