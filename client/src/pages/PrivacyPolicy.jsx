import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl bg-white text-black rounded-2xl shadow-xl p-8"
      >
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          We value your privacy and are committed to protecting your personal data.  
          This policy explains how we collect, use, and safeguard your information.
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>We do not sell or share your personal data with third parties.</li>
          <li>Cookies are used only to enhance your quiz experience.</li>
          <li>Your progress data is stored securely.</li>
          <li>You can request deletion of your account at any time.</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
