import React, {useState, useEffect} from "react";
import QuestionsDisplay from "../components/QuestionsDisplay";
import { getRecentlyAnsweredQuestions } from "../services/WorldsWisdomCore";
import { useSearchParams } from 'react-router-dom';

export default function RecentAnswersContainer() {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("categoryname");
  const [questions, setQuestions] = useState([]);
    
  useEffect(() => {
    async function fetchRecentAnswerQuestions() {
      const questionData = await getRecentlyAnsweredQuestions();
      setQuestions(questionData);
    }
    fetchRecentAnswerQuestions();
  }, []);

  return (
    <div>
        <div className="d-flex justify-content-start p-3">
            <h5>Recently answered questions</h5>
        </div>
        <div className="justify-content-center pb-3">
            <div className="d-flex flex-column">
                <div className="flex-grow-1 text-center d-flex flex-column justify-content-center">
                    <QuestionsDisplay questions={questions}/>
                </div>
            </div>
        </div>
    </div>
  );
}