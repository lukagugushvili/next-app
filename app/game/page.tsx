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
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswers(e.target.value);
  };

  const handleEndGame = () => {
    if (currentIndex >= 5) {
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
      setCurrentIndex(currentIndex + 1);
      setErrorMsg("");
    } else {
      setErrorMsg("Fill in the input !!!");
    }
    setAnswers("");
  };

  const handleResetGame = () => {
    setEndGame(false);
    setCurrentIndex(1);
    setTrueAnswers(0);
  };

  return (
    <div className="game-wrapper">
      {endGame ? (
        <>
          <h1>
            You scored{" "}
            <span className="text-xl text-pink-400">{trueAnswers}</span> out of{" "}
            <span className="text-xl text-pink-400">{questions.length}</span>{" "}
            points
          </h1>
          <button
            className="btn btn-active btn-secondary mt-6"
            onClick={handleResetGame}
          >
            Reset Game
          </button>
        </>
      ) : (
        <div className="flex flex-col gap-6">
          <h1 className="text-sky-400 text-xl">
            {currentIndex} / {questions.length} კითხვა
          </h1>

          <h2 className="text-sky-400 text-xl">ნამიოკი #{currentIndex}</h2>

          <h3 className="text-sky-400 text-xl">
            {questions[currentIndex - 1].question} - ნამიოკი{" "}
            <span className="text-rose-500 text-2xl">
              {questions[currentIndex - 1].answer[0]}
            </span>
          </h3>

          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <input
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
                value={answers}
                placeholder="Type here"
                onChange={handleChangeInput}
              />

              <button
                className="btn btn-active btn-accent"
                onClick={handleSaveAnswers}
              >
                Submite
              </button>
            </div>

            <p className="text-red-900 ">{errorMsg}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;
