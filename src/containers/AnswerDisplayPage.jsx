import { React, useState, useEffect } from "react";
import QuestionDisplay from "../components/Question_display";
import { getQuestion } from "../services/WorldsWisdomCore";
import AnswerDisplayContainer from "./AnswerDisplayContainer";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Landing() {
  const [searchParams] = useSearchParams();
  const [question, setQuestion] = useState([]);
  const [videoKeys, setVideoKeys] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchQuestion() {
      const questionId = searchParams.get("questionid");
      const questionData = await getQuestion(questionId);
      setQuestion(questionData.question);
      setVideoKeys(questionData.question.videoKeys);
    }
    fetchQuestion();
  }, []);

  const clickUploadAnswer = () => {
    const questionData = "?questionId=" + question._id + "&questionText=" + question.questionText;
    navigate({pathname: "/questionanswer", search: questionData});
  }

  return (
    <div className="d-flex flex-column inner-height landing">
    <br/>
      <div className="container-fluid text-center d-flex flex-column justify-content-center">
        <legend>{question.questionText}</legend>
        {(videoKeys.length==0) ? "This question has no answers." : ""}
        {videoKeys.map((videoKey, index) => (
          <AnswerDisplayContainer videoKey={videoKey} key={index} />
        ))}
        <div>
        <button type="button" className="btn btn-primary mt-3" onClick={clickUploadAnswer}>Upload Answer</button>
        </div>
        <br/>
        <br/>
      </div>
    </div>
  );
}
