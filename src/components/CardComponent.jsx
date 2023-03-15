import React from "react";
import Card from 'react-bootstrap/Card';

/*const CardComponent = ({ dimension, text, image, hyperlink }) => {
  return (
    <Card style={{ width: dimension, height: dimension, backgroundImage: `url(${image})` }}>
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Link href={hyperlink}>Learn More</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
*/

const CardComponent = (props) => {
  return (
    <Card 
      style={{ width: props.dimension, height: props.dimension }}>
      <Card.Img 
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