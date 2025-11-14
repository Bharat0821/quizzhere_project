import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import Quiz from '@/pages/student/Quiz'

const quizzes = [1, 2, 3, 4, 5, 6];

const Quizzes = () => {
  const isLoading = false;

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-10 text-gray-900 dark:text-white">
          Our Quizzes
        </h2>

        {/* Grid */}
           <div className="flex flex-wrap gap-6">
      <Quiz
        title="HTML"
        description="Test your knowledge of basic HTML tags, attributes, and structure."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnptBD6uQ8V1-X21FlmUDjvSlvwPhimTwhlQ&s"
        questionsCount={15}
      />
      <Quiz
        title="CSS"
        description="Challenge yourself with CSS properties and selectors."
        image="data:image/png;base64,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"
        questionsCount={15}
      />
      <Quiz
        title="JavaScript"
        description="Check how well you know JavaScript fundamentals."
        image="data:image/png;base64,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"
        questionsCount={15}
      />
   </div>
      </div>
    </div>
  );
};

export default Quizzes;

// Skeleton Loader
const QuizSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md w-full">
      {/* Image Placeholder */}
      <Skeleton className="h-40 w-full rounded-xl bg-gray-300 dark:bg-gray-700" />
      
      {/* Text Placeholders */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700" />
        <Skeleton className="h-4 w-1/2 bg-gray-300 dark:bg-gray-700" />
      </div>
      </div>
  );
};
