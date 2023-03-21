import { React, useState, useEffect } from "react";
import QuestionDisplay from "../components/Question_display";
import { getQuestion } from "../services/WorldsWisdomCore";
import AnswerDisplayContainer from "./AnswerDisplayContainer";
import { useSearchParams } from "react-router-dom";

export default function Landing() {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState([]);
  const [videoKeys, setVideoKeys] = useState([]);
  
  useEffect(() => {
    async function fetchQuestion() {
      const questionId = searchParams.get("questionid");
      const questionData = await getQuestion(questionId);
      setQuestion(questionData.question);
      setVideoKeys(questionData.question.videoKeys);
    }
    fetchQuestion();
  }, []);

  return (
    <div className="d-flex flex-column inner-height landing">
      <div className="container flex-grow-1 text-center d-flex flex-column justify-content-center">
        <QuestionDisplay question={question}/>
        {(videoKeys.length==0) ? "This question has no answers." : ""}
        {videoKeys.map((videoKey, index) => (
          <AnswerDisplayContainer videoKey={videoKey} key={index} />
        ))}
      </div>
    </div>
  );
}
