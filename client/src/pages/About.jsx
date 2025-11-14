import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl bg-white text-black rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 leading-relaxed">
          Welcome to our Quiz Platform 🎯 — a place where learning meets fun!  
          Our goal is to make quizzes interactive, engaging, and effective for 
          both students and professionals. We cover a variety of topics including 
          HTML, CSS, and JavaScript, ensuring you stay sharp in your coding journey.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
