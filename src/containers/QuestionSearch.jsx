import {React, useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { search } from "../services/WorldsWisdomCore";

export default function QuestionSearch() {
    const [questions, setQuestions] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search");

    useEffect(() => {
        async function fetchQuestions() {
          const res = await search(searchQuery);
          const questions = res.payload;
          setQuestions(questions);
        }
        fetchQuestions();
      }, []);
    
    return (
      <div>
        {questions.map((question, index) => (
            <div key={index}>{question.questionText}</div>
        ))}
      </div>
    )
  }