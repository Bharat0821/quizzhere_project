import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative 
      bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      flex items-center justify-center text-center 
      h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
      transition-colors duration-300 px-4 pt-20 sm:pt-28">
      
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold mb-4 text-white dark:text-gray-100">
          Welcome to QuizzHere
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-lg md:text-xl mb-6 
          text-white dark:text-gray-300">
          Discover, Learn and Upskill with our world wide range of quizzes
        </p>

        {/* Search Bar */}
        <form 
          action="" 
          className="flex flex-col sm:flex-row items-center 
          bg-white dark:bg-gray-800 
          p-1 sm:p-2 rounded-lg shadow-lg 
          transition-colors duration-300 gap-2 sm:gap-0 
          max-w-xs sm:max-w-md mx-auto">
          
          <input 
            type="text" 
            placeholder="Search quizzes..." 
            className="p-1.5 sm:p-2 text-sm sm:text-base
            rounded-md sm:rounded-l-md sm:rounded-r-none 
            outline-none w-full 
            text-gray-800 dark:text-white dark:bg-gray-900"
          />
          
          <button 
            type="submit" 
            className="w-full sm:w-auto 
            bg-gradient-to-r from-gray-900 via-gray-700 to-black
            text-white font-semibold 
            text-sm sm:text-base 
            px-3 sm:px-4 py-1.5 sm:py-2 
            rounded-md sm:rounded-r-md sm:rounded-l-none 
            hover:opacity-90 transition"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  )
}

export default HeroSection
