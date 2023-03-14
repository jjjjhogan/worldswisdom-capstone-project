import React from 'react';
import CardComponent from './CardComponent';
import { Container, Row, Col } from 'react-bootstrap';
import history from './CardImages/history.jpg';

/* const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
    <div>
      <CardComponent
        dimension="150px"
        text="History"
        image="path/to/book/image.jpg"
        link="path/to/history/questions"
      />
    </div>
  );
};

export default HomePage;
*/



function HomePage() {

  const cardsData = [
    {
      dimension: '150px',
      text: 'History',
      image: history,
      hyperlink: '/history-questions'
    },
    {
      dimension: '150px',
      text: 'Science',
      image: 'path/to/science/image.jpg',
      hyperlink: '/science-questions'
    },
    {
      dimension: '150px',
      text: 'Math',
      image: 'path/to/math/image.jpg',
      hyperlink: '/math-questions'
    }
  ];

  return (
    <Container>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={4}>
            <CardComponent
              dimension={card.dimension}
              text={card.text}
              image={card.image}
              hyperlink={card.hyperlink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
