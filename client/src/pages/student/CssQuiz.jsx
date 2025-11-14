import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CssQuiz = () => {
  const questions = [
    {
      question: "Which property changes text color?",
      options: ["background-color", "color", "font-style", "text-align"],
      correct: 1,
    },
    {
      question: "Which unit is relative to the root element font size?",
      options: ["em", "rem", "%", "px"],
      correct: 1,
    },
    {
      question: "Which property controls the space between lines of text?",
      options: ["letter-spacing", "line-height", "word-spacing", "text-indent"],
      correct: 1,
    },
    {
      question: "Which property makes text bold?",
      options: ["font-style", "font-weight", "text-transform", "font-variant"],
      correct: 1,
    },
    {
      question: "What is the default position value in CSS?",
      options: ["relative", "absolute", "static", "fixed"],
      correct: 2,
    },
    {
      question: "Which property sets the background color?",
      options: ["color", "background", "background-color", "bgcolor"],
      correct: 2,
    },
    {
      question: "Which CSS property controls the size of text?",
      options: ["font-size", "text-size", "size", "font-style"],
      correct: 0,
    },
    {
      question: "Which property is used for rounded corners?",
      options: ["corner-radius", "border", "border-radius", "round-corner"],
      correct: 2,
    },
    {
      question: "Which property is used to create shadow on text?",
      options: ["box-shadow", "shadow", "text-shadow", "font-shadow"],
      correct: 2,
    },
    {
      question: "Which property is used to hide an element?",
      options: ["display: none", "visibility: hidden", "opacity: 0", "All of the above"],
      correct: 3,
    },
    {
      question: "Which property is used to set the order of flex items?",
      options: ["align-items", "flex-wrap", "order", "flex-direction"],
      correct: 2,
    },
    {
      question: "Which CSS property is used for controlling the layout in grid?",
      options: ["grid-template", "grid-area", "grid-template-columns", "All of the above"],
      correct: 3,
    },
    {
      question: "Which property is used to change the cursor shape?",
      options: ["cursor", "pointer", "hover", "mouse-style"],
      correct: 0,
    },
    {
      question: "Which CSS property sets the spacing between letters?",
      options: ["word-spacing", "letter-spacing", "line-height", "text-indent"],
      correct: 1,
    },
    {
      question: "Which property is used to make text uppercase?",
      options: ["text-style", "font-transform", "text-transform", "text-decoration"],
      correct: 2,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes for full quiz
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (index) => {
    const newAnswers = [...answers];
    newAnswers[current] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrevious = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleExit = () => {
    setShowResult(true);
  };

  const score = answers.filter(
    (ans, i) => ans === questions[i].correct
  ).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-4 text-white relative">
         {!showResult ? (
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-2 text-blue-400">CSS Quiz</h2>
          <p className="text-sm text-gray-400 mb-4">Time Left: {timeLeft}s</p>

          <p className="mb-4 text-lg font-medium">
            {questions[current].question}
          </p>

          <div className="space-y-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full p-3 rounded-lg border transition cursor-pointer ${
                  answers[current] === i
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-gray-800 hover:bg-gray-700 border-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={current === 0}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setShowResult(true)}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">Quiz Result</h2>
          <p className="text-lg font-semibold mb-2">
            Your Score: {score} / {questions.length}
          </p>
          <p className="text-gray-400 mb-4">
            {score === questions.length
              ? "Excellent! You mastered CSS basics."
              : score >= 10
              ? "Great work! Just revise a few CSS concepts."
              : score >= 5
              ? "Good attempt! But you need more CSS practice."
              : "Needs improvement. Practice CSS properties."}
          </p>
        </div>
      )}
    </div>
  );
};

export default CssQuiz;
