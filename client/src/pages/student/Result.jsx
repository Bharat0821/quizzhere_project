import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { answers = [], questions = [], quizType = "html" } = location.state || {};

  // calculate score + weak areas
  let score = 0;
  let weakAreas = [];
  questions.forEach((q, i) => {
    if (answers[i] === q.correct) {
      score++;
    } else {
      weakAreas.push(q.question);
    }
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Your Result</h2>
        <p className="text-lg font-medium mb-2">
          Quiz Type: <span className="capitalize">{quizType}</span>
        </p>
        <p className="text-xl mb-4">
          Score: <span className="font-bold">{score}</span> / {questions.length}
        </p>

        <h3 className="text-lg font-semibold mb-2">Weak Areas:</h3>
        {weakAreas.length > 0 ? (
          <ul className="list-disc text-left px-6 space-y-1 mb-4">
            {weakAreas.map((w, i) => (
              <li key={i} className="text-red-600">{w}</li>
            ))}
          </ul>
        ) : (
          <p className="text-green-600 mb-4">Great job! No weak areas 🎉</p>
        )}

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Result;
