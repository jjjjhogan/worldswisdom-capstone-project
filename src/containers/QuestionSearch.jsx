import {React, useState, useEffect } from "react";
import QuestionsDisplay from "../components/QuestionsDisplay";
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
      <QuestionsDisplay questions={questions}/>
    );
  }