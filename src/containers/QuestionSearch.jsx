import {React, useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { search } from "../services/WorldsWisdomCore";

export default function QuestionSearch() {
    const [questions, setQuestions] = useState([]);
    const [searchParams] = useSearchParams();
    const [questionText, setQuestionText] = useState([]);
    const searchQuery = searchParams.get("search");

    useEffect(() => {
        async function fetchQuestions() {
          const res = await search(searchQuery);
          const questions = res.payload;
          setQuestions(questions);
          setQuestionText(questions.map(question => question.questionText));
        }
        fetchQuestions();
      }, []);

    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h1>{searchQuery}</h1>
        </div>
        {questions.map((question, index) => (
          <div className="bg-light border" key={index}>
            <div className="questionCat">
              <button type="button" className="btn btn-light btn-sm">{question.categories}</button>
            </div>
            <div className="questionText">
              <h5>{question.questionText}</h5>
              <button type="button" className="btn btn-light btn-sm">reply</button>
            </div>
          </div>
        ))}
      </div>
    )
  }