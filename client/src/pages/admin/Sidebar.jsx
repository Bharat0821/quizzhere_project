import { ChartNoAxesColumn, SquareLibrary } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex'>
<div className="hidden lg:block w-[250px] sm:w-[300px] border-r border-gray-300 bg-[#f9f9f9] p-5 sticky top-0 h-screen py-22">
    <div className="flex flex-col gap-4">
        {/* Dashboard Link */}
        <Link 
          to="/admin/dashboard" 
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <ChartNoAxesColumn size={20} />
          <span className="text-base font-medium">Dashboard</span>
        </Link>

        {/* Quizzes Link */}
        <Link 
          to="/admin/quizzes" 
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 transition"
        >
          <SquareLibrary size={20} />
          <span className="text-base font-medium">Quizzes</span>
        </Link>
      </div>
    </div>
      <div>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default Sidebar;
