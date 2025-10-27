import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeClassName = "bg-indigo-700 text-white";
  const inactiveClassName = "text-gray-300 hover:bg-indigo-500 hover:text-white";

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white text-2xl font-bold">
              홈
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/ping"
                className={({ isActive }) =>
                  `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium`
                }
              >
                서버 체크
              </NavLink>
              <NavLink
                to="/nyangnyang"
                className={({ isActive }) =>
                  `${isActive ? activeClassName : inactiveClassName} px-3 py-2 rounded-md text-sm font-medium`
                }
              >
                냥냥식당타이쿤 설명
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
