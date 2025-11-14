import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HtmlQuiz = () => {
  const navigate = useNavigate();

  // HTML quiz questions (15 total)
  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyperlinks and Text Markup Language",
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "HighText Machine Language",
      ],
      correct: 1,
      topic: "Basics",
    },
    {
      question: "Which tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correct: 0,
      topic: "Lists",
    },
    {
      question: "Which attribute specifies an image source?",
      options: ["href", "src", "alt", "link"],
      correct: 1,
      topic: "Images",
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<nav>"],
      correct: 1,
      topic: "Links",
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<h6>", "<heading>", "<head>"],
      correct: 0,
      topic: "Headings",
    },
    {
      question: "Which tag is used for inserting a line break?",
      options: ["<br>", "<break>", "<lb>", "<hr>"],
      correct: 0,
      topic: "Text",
    },
    {
      question: "Which tag is used for creating a table row?",
      options: ["<td>", "<tr>", "<th>", "<table>"],
      correct: 1,
      topic: "Tables",
    },
    {
      question: "Which attribute provides alternative text for an image?",
      options: ["title", "alt", "src", "desc"],
      correct: 1,
      topic: "Images",
    },
    {
      question: "Which tag is used to define a form in HTML?",
      options: ["<input>", "<form>", "<fieldset>", "<submit>"],
      correct: 1,
      topic: "Forms",
    },
    {
      question: "Which input type is used to create a checkbox?",
      options: ["text", "check", "checkbox", "radio"],
      correct: 2,
      topic: "Forms",
    },
    {
      question: "Which HTML element is used to define emphasized text?",
      options: ["<i>", "<em>", "<italic>", "<strong>"],
      correct: 1,
      topic: "Text",
    },
    {
      question: "Which tag is used to define a division or section in HTML?",
      options: ["<section>", "<span>", "<div>", "<article>"],
      correct: 2,
      topic: "Structure",
    },
    {
      question: "What is the correct HTML tag for inserting a horizontal rule?",
      options: ["<line>", "<br>", "<hr>", "<rule>"],
      correct: 2,
      topic: "Text",
    },
    {
      question: "Which tag is used to define metadata in an HTML document?",
      options: ["<meta>", "<link>", "<head>", "<title>"],
      correct: 0,
      topic: "Head",
    },
    {
      question: "Which attribute is used to open a link in a new tab?",
      options: ["open", "target='_blank'", "new", "window='_blank'"],
      correct: 1,
      topic: "Links",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [showResult, setShowResult] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (showResult) return;
    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResult]);

  const handleAnswer = (index) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleExit = () => {
    navigate("/");
  };

  // Calculate score & weak areas
  const score = answers.reduce(
    (acc, ans, i) => (ans === questions[i].correct ? acc + 1 : acc),
    0
  );
  const weakAreas = questions
    .filter((q, i) => answers[i] !== q.correct)
    .map((q) => q.topic);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4 relative">
        

      {!showResult ? (
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6">
          {/* Timer + Heading */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-red-100">HTML Quiz</h2>
            <span
              className={`font-semibold ${
                timeLeft <= 10 ? "text-red-400" : "text-gray-300"
              }`}
            >
              ⏳ {timeLeft}s
            </span>
          </div>

          {/* Question */}
          <h3 className="text-lg font-medium mb-4 text-gray-200">
            Q{current + 1}. {questions[current].question}
          </h3>

          {/* Options */}
          <div className="space-y-2">
            {questions[current].options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full p-3 text-left border rounded-lg transition ${
                  answers[current] === i
                    ? "bg-orange-700 border-orange-400"
                    : "hover:bg-gray-700 border-gray-600"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              disabled={current === 0}
              onClick={() => setCurrent(current - 1)}
              className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent(current + 1)}
                className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 text-white"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-2xl bg-gray-800 rounded-xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-100 mb-4">Quiz Result</h2>
          <p className="text-lg font-semibold mb-2 text-gray-200">
            Your Score: {score} / {questions.length}
          </p>
          <p className="text-gray-400 mb-4">
            📊 Percentage: {((score / questions.length) * 100).toFixed(2)}%
          </p>

          {weakAreas.length > 0 ? (
            <div className="text-red-400 font-medium">
              Weak Areas: {weakAreas.join(", ")}
            </div>
          ) : (
            <div className="text-green-400 font-medium">
              Great job! No weak areas 🎯
            </div>
          )}
           <div className="flex justify-center gap-4">
            <Button
              onClick={handleExit}
              className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow"
            >
              Exit Quiz
            </Button>
              <Button
            className="mt-6 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg shadow">
            Restart
          </Button>
           </div>
                
        </div>
      )}
    </div>
  );
};

export default HtmlQuiz;
