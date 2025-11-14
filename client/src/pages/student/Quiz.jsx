import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useLoadUserQuery } from "@/features/api/authApi";
import { toast } from "sonner";

const Quiz = ({ title, description, image, questionsCount }) => {
  const { data } = useLoadUserQuery();
  const navigate = useNavigate();

  const btnHandler = () => {
  if (data) {
    console.log("User exists");

    if (title.toLowerCase() === "html") {
      navigate("/html");
    } else if (title.toLowerCase() === "css") {
      navigate("/css");
    } else if (title.toLowerCase() === "javascript") {
      navigate("/javascript");
    } else {
      console.log("Unknown quiz type ❌");
      toast.error("Quiz not found!");
    }

  } else {
    console.log("No user found ❌");
    toast.error("Please login first!");
    navigate("/login");
  }
};


  return (
    <div className="flex justify-center">
      <Card className="max-w-xs w-full overflow-hidden rounded-lg bg-white hover:shadow-[0_6px_10px_rgba(255,255,255,0.8)] transform hover:scale-105 transition-all duration-300">
        {/* Full image */}
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover"
          />
        )}

        <CardContent>
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-lg font-bold text-black">
              {title}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              {description}
            </CardDescription>
          </CardHeader>

          {/* Footer */}
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={btnHandler}
              className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
            >
              Start Quiz
            </button>
            <span className="text-xs text-gray-500">
              {questionsCount} Questions
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
