// SkeletonLoader.js
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
      <div className="h-48 bg-gray-300 rounded"></div>
    </div>
  );
};

export default LoadingSpinner;
