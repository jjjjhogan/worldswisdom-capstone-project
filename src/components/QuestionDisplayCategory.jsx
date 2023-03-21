import { React, useState, useEffect} from "react";
import { getCategoryQuestions } from "../services/WorldsWisdomCore";
import { useSearchParams } from 'react-router-dom';


export default function QuestionDisplayCategory( props ){
    const [categories, setCategories] = useState([]);
    const [questionText, setQuestionText] = useState([]);
    const [searchParams] = useSearchParams();

    const searchQuery = searchParams.get("categoryname");
    
    useEffect(() => {
      async function fetchCategoryQuestions() {
        const questionData = await getCategoryQuestions(searchQuery);
        setCategories(questionData.map(q => q.categories));
        setQuestionText(questionData.map(q => q.questionText));
      }
      fetchCategoryQuestions();
    }, []);

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>{searchQuery}</h1>
        </div>
        {categories.map((category, index) => (
          <div className="bg-light border" key={index} >
            <div className="questionCat">
              <button type="button" className="btn btn-light btn-sm">{category}</button>
            </div>
            <div className="questionText">
              <h5>{questionText[index]}</h5>
              <button type="button" className="btn btn-light btn-sm">reply</button>
            </div>
          </div>
        ))}
      </div>
    );
    }