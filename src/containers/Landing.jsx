import { React, useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/Carousel";
import { getCategories } from "../services/WorldsWisdomCore";

export default function Landing() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }
    fetchCategories();
  }, []);

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
      <div className="d-flex justify-content-start p-3">
        <h5>Explore your chosen topics</h5>
      </div>
      <div className="d-flex justify-content-center">
        <Container>
          <Row>
            {categories.map((category, index) => (
              <Col key={index} xs={12} md={3} lg={2} className="mb-4">
                <CardComponent
                  dimension="150px"
                  text={category.categoryName}
                  image={process.env.REACT_APP_S3_BASE_PATH + category.categoryImg}
                  // hyperlink={card.hyperlink}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="d-flex justify-content-end">
        <a href="#" className="link-primary">Click here for more</a>
      </div>
      <hr/>
      <div className="d-flex justify-content-start p-3">
        <h5>Explore popular questions</h5>
      </div>
      <div className="d-flex justify-content-center pb-3">
        <CarouselComponent items={carouselData} />
      </div>
      <hr/>
      <div className="d-flex justify-content-start p-3">
        <h5>Recently answered questions</h5>
      </div>
    </div>
    
  );
}
