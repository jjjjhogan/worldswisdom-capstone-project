import { React, useState, useEffect} from "react";
import { getCategoryQuestions } from "../services/WorldsWisdomCore";
import { useSearchParams } from 'react-router-dom';


export default function QuestionDisplay( props ){
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
        <h1>{categories}</h1>
        {categories.map((category, index) => (
          <div className="bg-light border" key={index} style={{}}>
            <div className="questionCat">
              <button type="button" className="btn btn-light btn-sm">{category}</button>
            </div>
            <div className="questionText">
              <p>{questionText[index]}</p>
              <button type="button" className="btn btn-light btn-sm">reply</button>
            </div>
          </div>
        ))}
      </div>
    );
    }