import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const JsQuiz = () => {
  const questions = [
    { question: "Which keyword declares a variable?", options: ["var", "let", "const", "All of the above"], correct: 3 },
    { question: "What is the output of: console.log(typeof null)?", options: ["null", "object", "undefined", "boolean"], correct: 1 },
    { question: "Which company developed JavaScript?", options: ["Microsoft", "Netscape", "Oracle", "Sun Microsystems"], correct: 1 },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "/* */", "#", "<!-- -->"], correct: 0 },
    { question: "What is the default value of an uninitialized variable in JavaScript?", options: ["null", "undefined", "0", "NaN"], correct: 1 },
    { question: "Which method is used to join array elements into a string?", options: ["concat()", "toString()", "join()", "slice()"], correct: 2 },
    { question: "Which operator is used to compare both value and type?", options: ["==", "===", "=", "!="], correct: 1 },
    { question: "Which function converts JSON to an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "parse.JSON()"], correct: 0 },
    { question: "What is the output of: Boolean(0)?", options: ["true", "false", "0", "undefined"], correct: 1 },
    { question: "Which method adds one or more elements at the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correct: 0 },
    { question: "Which keyword is used to define a constant in JavaScript?", options: ["const", "let", "var", "define"], correct: 0 },
    { question: "What does NaN stand for?", options: ["Not a Null", "Not a Number", "Negative Number", "New Array Node"], correct: 1 },
    { question: "Which of the following is NOT a JavaScript data type?", options: ["Undefined", "Number", "Float", "Boolean"], correct: 2 },
    { question: "Which function is used to print something in the console?", options: ["print()", "log()", "console.log()", "write()"], correct: 2 },
    { question: "Which event occurs when the user clicks an HTML element?", options: ["onchange", "onmouseover", "onclick", "onload"], correct: 2 },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(180);
  const [showResult, setShowResult] = useState(false);

  // Timer
  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, showResult]);

  const handleAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[current] = index;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };
  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleExit = () => {
    setShowResult(true);
  };

  const score = answers.filter((ans, i) => ans === questions[i].correct).length;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black p-4 text-white relative">
     

      {!showResult ? (
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-2 text-yellow-400">JavaScript Quiz</h2>
          <p className="text-sm text-gray-400 mb-4">Time Left: {timeLeft}s</p>

          <p className="mb-4 text-lg font-medium">
            Q{current + 1}. {questions[current].question}
          </p>

          <div className="space-y-3">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full p-3 rounded-lg border transition cursor-pointer ${
                  answers[current] === i
                    ? "bg-yellow-500 text-black border-yellow-500"
                    : "bg-gray-800 hover:bg-gray-700 border-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={current === 0}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            {current < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg cursor-pointer"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleExit}
                className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg cursor-pointer"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-900 rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Quiz Result</h2>
          <p className="text-lg font-semibold mb-2">
            Your Score: {score} / {questions.length}
          </p>
          <p className="text-gray-400 mb-4">
            {score === questions.length
              ? "🔥 Perfect! You mastered JavaScript basics."
              : score >= 10
              ? "Great work! You're on the right track."
              : score >= 5
              ? "Good attempt, but keep practicing."
              : "Needs improvement. Study JavaScript fundamentals."}
          </p>
        </div>
      )}
    </div>
  );
};

export default JsQuiz;
