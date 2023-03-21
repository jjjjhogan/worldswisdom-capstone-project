import { React, useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/Carousel";
import { getCategories, getPopularQuestions } from "../services/WorldsWisdomCore";
import { useNavigate } from "react-router-dom";
import RecentAnswersContainer from "./RecentAnswersContainer";
import "./Landing.css";

export default function Landing() {
  const [categories, setCategories] = useState([]);
  const [userData, setUserData] = useState(null);
  const [popularQuestions, setPopularQuestions] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    }

    async function fetchPopular() {
      const questions = await getPopularQuestions();
      setPopularQuestions(questions);
    }

    fetchCategories();
    fetchPopular();

    const data = JSON.parse(sessionStorage.getItem("userData"));
    if (data) {
      setUserData(data);
    }
  }, []);

  const navigate = useNavigate();
  const onCategoryClick = (event) => {
    event.preventDefault();
    const searchQuery = "?categoryname=" + event.target.textContent;
    navigate({pathname: "/questiondisplay", search: searchQuery});
  }

  function CategoryCards() {
    if (userData) {
      const userCategoryObjs = categories.filter(category => (userData.chosenCategories.includes(category.categoryName)));
      return userCategoryObjs.map((category, index) => (
        <Col key={index} xs={12} md={3} lg={2} className="mb-4">
          <CardComponent
            dimension="150px"
            text={category.categoryName}
            image={process.env.REACT_APP_S3_BASE_PATH + category.categoryImg}
            onClick={onCategoryClick}
          />
        </Col>
      ));
    } else {
      return categories.map((category, index) => (
        <Col key={index} xs={12} md={3} lg={2} className="mb-4">
          <CardComponent
            dimension="150px"
            text={category.categoryName}
            image={process.env.REACT_APP_S3_BASE_PATH + category.categoryImg}
            onClick={onCategoryClick}
          />
        </Col>
      ));
    }
  }

  return (
    <div className="d-flex flex-column inner-height landing">
      <div className="d-flex justify-content-start p-3">
        {userData ? (
          <h5>Welcome back {userData.firstName}! Explore your chosen topics</h5>
        ) : (
          <h5>Explore some popular topics</h5>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <Container className="py-0">
          <Row>
            <CategoryCards />
          </Row>
        </Container>
      </div>
      {/* <div className="d-flex justify-content-end">
        <a href="#" className="link-primary">Click here for more</a>
      </div> */}
      <hr/>

      <div className="d-flex justify-content-start p-3">
        <h5>Explore popular questions</h5>
      </div>
      <div className="d-flex justify-content-center pb-3">
        <CarouselComponent questions={popularQuestions} categories={categories}/>
      </div>

      <hr/>
      
        <RecentAnswersContainer />
    </div>
    
  );
}
