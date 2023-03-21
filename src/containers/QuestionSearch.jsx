import {React, useState, useEffect } from "react";
import QuestionDisplay from "../components/Question_display";
import { search } from "../services/WorldsWisdomCore";

export default function QuestionSearch({searchQuery}) {
    const [questions, setQuestions] = useState([]);

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
          <QuestionDisplay question={question} key={index}/>
        ))}
      </div>
    );
  }