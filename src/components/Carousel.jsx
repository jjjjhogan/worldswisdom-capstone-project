import React from 'react';
import { Carousel, CarouselItem } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const CarouselComponent = ({questions, categories}) => {
  const navigate = useNavigate();
  const getCategoryImg = (question) => {
    console.log(question);
    let category = categories.find(category => category.categoryName == question.categories);
    if (category) {
      return category.categoryImg;
    } else {
      return "";
    }
  }
  const onQuestionClick = (question) => {
    const searchQuery = "?questionid=" + question._id;
    navigate({pathname: "/answerdisplay", search: searchQuery});
  };

  return (
      <Carousel style={{ width: '450px', height: '250px' }}>
        {questions.map((question, index) => (
          <CarouselItem key={index} onClick={() => onQuestionClick(question)}>
            <img
              src={process.env.REACT_APP_S3_BASE_PATH + getCategoryImg(question)}
              style={{ width: '450px', height: '250px', objectFit: "cover" }}
              className="rounded"
            />
            <Carousel.Caption>
              <h3>{question.categories}</h3>
              <p>{question.questionText}</p>
            </Carousel.Caption>
        </CarouselItem>
        ))}
      </Carousel>
  );
};

export default CarouselComponent;
