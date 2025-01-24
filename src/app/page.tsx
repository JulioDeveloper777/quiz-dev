"use client";

import { Questions } from "@/data/questions";
import { useState } from "react";
import { QuestionItem } from "./components/QuestionItem";
import { Results } from "./components/Results";
import { Title } from "./components/Title";

export default function Home() {
  const [answers, setAnsewrs] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const loadNextQuestion = () => {
    if (Questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {  
      setShowResult(true);
    }
  };

  const handleAnswer = (answer: number) => {
    setAnsewrs((prev) => [...prev, answer]);
    if (answer === Questions[currentQuestion].answer) {
      setCorrectAnswers((prev) => prev + 1);
    }
    loadNextQuestion();
  };

  const handleButtonRestartQuiz = () => {
    setAnsewrs([]);
    setCurrentQuestion(0);
    setCorrectAnswers(0);
    setShowResult(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0F172A] font-inter items-center justify-center p-4">
      <Title />
      {!showResult && (
        <QuestionItem
          question={Questions[currentQuestion]}
          count={currentQuestion + 1}
          key={currentQuestion + 1}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion}
          correctAnswers={correctAnswers}
        />
      )}
      {showResult && (
        <>
          <Results
            questions={Questions}
            answers={answers}
          />
          <button
            onClick={handleButtonRestartQuiz}
            className="bg-[#A3E635] p-4 text-xl text-nowrap w-80 text-black rounded-xl hover:opacity-50 relative mt-8 mb-8"
          >
            Reiniciar Quiz
          </button>
        </>
      )}
    </div>
  );
}