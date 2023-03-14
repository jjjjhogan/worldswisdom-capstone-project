import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from "../components/CardComponent";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";


export default function Landing() {

  const cardsData = [
    {
      dimension: '150px',
      text: 'History',
      image: "https://static01.nyt.com/images/2021/01/18/us/18MLK-1963b/18MLK-1963b-mediumSquareAt3X.jpg",
      hyperlink: '/history-questions'
    },
    {
      dimension: '150px',
      text: 'Science',
      image: 'https://www.lupusuk.org.uk/wp-content/uploads/2017/10/dna-1811955_1920-square.jpg',
      hyperlink: '/science-questions'
    },
    {
      dimension: '150px',
      text: 'Art',
      image: 'https://m.media-amazon.com/images/I/A1G-rHtofxL._AC_UY1000_.jpg',
      hyperlink: '/math-questions'
    }
  ];

  const carouselData = [
    {
      id: 1,
      imageSrc: 'https://s.abcnews.com/images/Politics/gty_march_on_washington_martin_luther_king_ll_130819_16x9_1600.jpg',
      title: 'History',
    },
    {
      id: 2,
      imageSrc: 'https://static.scientificamerican.com/sciam/cache/file/7B4F3D12-2083-457B-A709F561FC4E696D_source.jpg',
      title: 'Science',
    },
    {
      id: 3,
      imageSrc: 'https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg',
      title: 'Art',
    }
  ];

  return (
    <div className="d-flex flex-column inner-height landing">
      <Navbar />
      <div class="d-flex justify-content-start p-3">
        <h5>Explore your chosen topics</h5>
      </div>
      <div class="d-flex justify-content-center">
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
      </div>
      <div class="d-flex justify-content-start p-3">
        <h5>Explore popular questions</h5>
      </div>
      <div class="d-flex justify-content-center">
        <CarouselComponent items={carouselData} />
      </div>
      <div class="d-flex justify-content-start p-3">
        <h5>Recently answered questions</h5>
      </div>
    </div>
    
  );
}
