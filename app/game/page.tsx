"use client";

import React, { useState } from "react";
import "../globals.css";
import { questionsData } from "../utils/Questions";
import { QuestionInterface } from "../interface/QuestionInter";

const GamePage = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [answers, setAnswers] = useState<string>("");
  const [trueAnswers, setTrueAnswers] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers(e.target.value);
  };

  const handleEndGame = () => {
    if (currentIndex === 5) {
      setEndGame(true);
      console.log(endGame);
    }
  };

  const handleSaveAnswers = () => {
    handleEndGame();
    if (answers?.trim() !== "") {
      if (questions[currentIndex - 1].answer === answers) {
        setTrueAnswers(trueAnswers + 1);
      }
    } else {
      alert("error");
    }
    setCurrentIndex(currentIndex + 1);
    setAnswers("");
  };

  return (
    <div className="game-wrapper">
      {endGame ? (
        <>
          <h1>
            {trueAnswers} / {questions.length}
          </h1>
        </>
      ) : (
        <>
          <h1>
            {currentIndex} / {questions.length} კითხვა
          </h1>
          <h2>ნამიოკი #{currentIndex}</h2>
          <h3>
            {questions[currentIndex - 1].question} - ნამიოკი
            {questions[currentIndex - 1].answer[0]}
          </h3>

          <div>
            <input
              className="bg-white outline-none"
              type="text"
              value={answers}
              placeholder="პასუხი"
              onChange={handleChangeInput}
            />
            <button onClick={handleSaveAnswers}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default GamePage;
