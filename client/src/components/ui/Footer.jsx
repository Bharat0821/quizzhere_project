import React from 'react'
import { Ghost } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const Footer = () => {
  const navigate = useNavigate();
  const cntHandler = () => {
    navigate('/contact');
  };
  const licenseHandler = () => {
    navigate('/license');
  };
  const abtHandler = () => {
    navigate('/about');
  };
  const Handler = () => {
    navigate('/privacy');
  };

  return (
    <footer className="
      bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      transition-colors duration-300">
      
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        
        {/* Logo + Links */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          
          {/* Logo Section */}
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <Ghost className="h-8 w-8 text-white" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              QuizzHere
            </h1>
          </div>
          
          {/* Links */}
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm font-medium hover:cursor-pointer">
            <li>
              <a onClick={abtHandler} className="text-white dark:text-gray-300 hover:cursor-pointer">About</a>
            </li>
            <li>
              <a onClick={Handler} className="text-white dark:text-gray-300 hover:cursor-pointer">Privacy Policy</a>
            </li>
            <li>
              <a onClick={licenseHandler} className="text-white dark:text-gray-300 hover:cursor-pointer">License</a>
            </li>
            <li>
              <a onClick={cntHandler} className="text-white dark:text-gray-300 hover:cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Copyright */}
        <span className="block text-sm text-center text-white dark:text-gray-400">
          © 2023{" "}
         
            QuizzHere™
          
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer
