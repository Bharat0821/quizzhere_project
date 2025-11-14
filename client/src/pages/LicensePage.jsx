import React from "react";
import { motion } from "framer-motion";

const LicensePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl bg-white text-black rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-4">License</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          This quiz platform is licensed under the MIT License.  
          You are free to use, modify, and distribute this project, 
          provided that you include attribution to the original creators.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
{`MIT License

Copyright (c) 2025 Quiz Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
...`}
        </pre>
      </motion.div>
    </div>
  );
};

export default LicensePage;
