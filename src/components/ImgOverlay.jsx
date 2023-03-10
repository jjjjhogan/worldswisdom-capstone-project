import React from "react";
import Card from 'react-bootstrap/Card';

export default function ImgOverlay({ dimension, text, imageSrc, linkTo }) {
  return (
    <Card style={{ width: dimension, height: dimension }}>
      <Card.Img src={imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Card.ImgOverlay>
        <Card.Title>{text}</Card.Title>
        <Card.Link href={linkTo}>Go to {text} questions</Card.Link>
      </Card.ImgOverlay>
    </Card>
  );
}
