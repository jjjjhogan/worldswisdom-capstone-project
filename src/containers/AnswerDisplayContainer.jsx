import React, {useState, useEffect} from "react";
import AnswerDisplay from "../components/AnswerDisplay";
import { getAnswer } from "../services/WorldsWisdomCore";

export default function AnswerDisplayContainer({ videoKey }) {
  const [answer, setAnswer] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getAnswerAndUser() {
      const {answer, user} = await getAnswer(videoKey);
      setAnswer(answer);
      setUser(user);
    }
    getAnswerAndUser();
  }, []);


  return (
    <div className="container-fluid text-center d-flex flex-column justify-content-center">
      <br/>
      <AnswerDisplay answer={answer} user={user}/>
      <br/>
    </div>
  );
}