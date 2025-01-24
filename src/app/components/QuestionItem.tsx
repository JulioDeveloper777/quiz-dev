"use client";

import { Questions } from "@/data/questions";
import { useState } from "react";
import { Question } from "../types/Question";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
  currentQuestion: number;
  correctAnswers: number;
};

export const QuestionItem = ({
  question,
  count,
  onAnswer,
  currentQuestion,
  correctAnswers,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnimatingButton, setIsAnimatingButton] = useState(false);
  const [countdownButton, setCountdownButton] = useState(5);

  const checkQuestion = (key: number) => {
    setSelectedAnswer(key);
    setIsAnimatingButton(true);

    let currentCount = countdownButton;
    const intervalAnimationButton = setInterval(() => {
      currentCount -= 1;
      setCountdownButton(currentCount);

      if (currentCount <= 0) {
        clearInterval(intervalAnimationButton);
      }
    }, 500);

    setTimeout(() => {
      clearInterval(intervalAnimationButton);
      onAnswer(key);
      setSelectedAnswer(null);
      setIsAnimatingButton(false);
    }, 2500);
  };

  const handleButtonCheckQuestion = (key: number) => {
    setSelectedAnswer(key);
    onAnswer(key);
    setSelectedAnswer(null);
    setIsAnimatingButton(false);
  };

  return (
    <div className="w-full max-w-4xl h-auto items-center justify-center flex flex-col mt-5 pb-24"> {/* Adicionado pb-20 para dar espaço ao rodapé */}
      <div className="flex flex-col font-inter lg:w-full border border-[#475569] rounded-lg mx-3">
        <div className="items-center pl-7 pr-7 lg:pl-10 h-20 flex gap-5 bg-[#1E293B]">
          <span className="flex p-4 font-bold text-white text-center items-center text-lg w-10 h-10 rounded-full bg-[#475569]">
            {count}
          </span>
          <h3 className="text-[#E2E8F0] font-semibold text-lg w-full lg:text-xl">
            {question.question}
          </h3>
        </div>
        <div className="bg-[#475569] lg:pl-12 pr-3 pl-3 flex gap-5 h-full flex-col pb-5 pt-5 font-sans">
          {question.options.map((item, key) => (
            <div key={key} className="flex gap-5 items-center p-3 rounded-md">
              <label
                className={`relative flex items-center ${
                  selectedAnswer !== null ? "cursor-auto" : "cursor-pointer"
                }`}
              >
                <input
                  type="radio"
                  name="group"
                  onChange={() => checkQuestion(key)}
                  className={`appearance-none w-6 h-6 border-2 border-[#94A3B8] rounded-full peer ${
                    selectedAnswer !== null ? "cursor-auto" : "cursor-pointer"
                  }`}
                  disabled={selectedAnswer !== null}
                />
                {selectedAnswer !== null &&
                  selectedAnswer !== question.answer &&
                  selectedAnswer === key && (
                    <svg
                      className="absolute w-6 h-6 opacity-0 peer-checked:opacity-100 transition-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="7.5" fill="#1E293B" stroke="#ff2a3c"/>
                      <circle cx="8" cy="8" r="5" fill="#ff2a3c"/>
                    </svg>
                  )}
                {selectedAnswer !== null &&
                  selectedAnswer === question.answer &&
                  selectedAnswer === key && (
                    <svg
                      className="absolute w-6 h-6 opacity-0 peer-checked:opacity-100 transition-opacity"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <circle cx="8" cy="8" r="7.5" fill="#1E293B" stroke="#A3E635"/>
                      <circle cx="8" cy="8" r="5" fill="#A3E635"/>
                    </svg>
                  )}
              </label>
              <h4
                className={`text-lg
                ${
                  selectedAnswer !== null &&
                  selectedAnswer === question.answer &&
                  selectedAnswer === key &&
                  "text-[#A3E635]"
                }
                 ${
                   selectedAnswer !== null &&
                   selectedAnswer !== question.answer &&
                   selectedAnswer === key &&
                   "text-[#ff2a3c]"
                 }
                `}
              >
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {question.options.map((item, key) => (
        <div key={key}>
          {selectedAnswer !== null && selectedAnswer === key && (
            <button
              onClick={() => handleButtonCheckQuestion(key)}
              className="bg-[#A3E635] p-4 text-xl text-nowrap w-80 text-black rounded-xl mt-5 relative overflow-hidden"
            >
              Próxima pergunta em <span>{countdownButton}s</span>
              {isAnimatingButton && (
                <span
                  className="absolute top-0 left-0 w-full h-full bg-black opacity-10"
                  style={{
                    animation: "slide 5s linear",
                  }}
                ></span>
              )}
            </button>
          )}
        </div>
      ))}
      <div className="fixed bottom-0 w-screen h-16 bg-[#A3E635] flex items-center justify-center lg:gap-24 gap-14 lg:text-xl text-lg">
        <h3 className="text-black font-sans">
          <span className="font-bold">
            Quest{Questions.length === 1 ? "ão" : "ões"}:
          </span>{" "}
          {currentQuestion + 1} de {Questions.length}
        </h3>
        <h3 className="text-black font-sans">
          <span className="font-bold">Acertos:</span> {correctAnswers} de {Questions.length}
        </h3>
      </div>
    </div>
  );
};