import { React, useState, useEffect} from "react";
import { getQuestion } from "../services/WorldsWisdomCore";
import { useSearchParams } from 'react-router-dom';


export default function QuestionDisplay( props ){
    const [category, setCategory] = useState();
    const [questionText, setQuestionText] = useState();
    const [searchParams] = useSearchParams();
    const questionId = searchParams.get("questionid");
    useEffect(() => {
      async function fetchQuestion() {
        const questionData = await getQuestion(questionId);
        setCategory(questionData.question.categories);
        setQuestionText(questionData.question.questionText);
      }
      fetchQuestion();
    }, []);
    return (
      
      <div>
        <div style={{ textAlign: "center" }}>
        </div>
          <div className="bg-light border"  >
            <div className="questionCat">
              <button type="button" className="btn btn-light btn-sm">{category}</button>
            </div>
            <div className="questionText">
              <h5>{questionText}</h5>
              <button type="button" className="btn btn-light btn-sm">reply</button>
            </div>
          </div>
      </div>
    );
    }