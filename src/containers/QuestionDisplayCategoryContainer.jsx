import React, {useState, useEffect} from "react";
import QuestionsDisplay from "../components/QuestionsDisplay";
import { getCategoryQuestions } from "../services/WorldsWisdomCore";
import { useSearchParams } from 'react-router-dom';

export default function QuestionDisplayCategoryContainer() {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("categoryname");
  const [questions, setQuestions] = useState([]);
    
  useEffect(() => {
    async function fetchCategoryQuestions() {
      const questionData = await getCategoryQuestions(categoryName);
      setQuestions(questionData);
    }
    fetchCategoryQuestions();
  }, []);

  return (
      <div className="d-flex flex-column inner-height landing">
        <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
          <div>
            <div style={{ textAlign: "center" }}>
              <h1>Popular {categoryName} Questions</h1>
            </div>
            <QuestionsDisplay questions={questions} searchQuery={categoryName}/>
          </div>
        </div>
      </div>
    );
  }