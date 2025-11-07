import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <div className="flex-shrink-0 flex items-center">
            <div className="bg-white/20 p-2 rounded-lg">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
            </div>
            <NavLink to="/" className="text-white text-2xl font-bold ml-3">
              jihucompany
            </NavLink>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white/30 text-white shadow-inner' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                홈
              </NavLink>
              <NavLink
                to="/ping"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white/30 text-white shadow-inner' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                서버 체크
              </NavLink>
              <NavLink
                to="/nyangnyang"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white/30 text-white shadow-inner' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                냥냥식당타이쿤
              </NavLink>
              <NavLink
                to="/blastloop"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? 'bg-white/30 text-white shadow-inner' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                BlastLoop
              </NavLink>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md hover:bg-white/20 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    isActive 
                      ? 'bg-white/30 text-white' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                홈
              </NavLink>
              <NavLink
                to="/ping"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    isActive 
                      ? 'bg-white/30 text-white' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                서버 체크
              </NavLink>
              <NavLink
                to="/nyangnyang"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    isActive 
                      ? 'bg-white/30 text-white' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                냥냥식당타이쿤
              </NavLink>
              <NavLink
                to="/blastloop"
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    isActive 
                      ? 'bg-white/30 text-white' 
                      : 'text-indigo-100 hover:bg-white/20 hover:text-white'
                  }`
                }
              >
                BlastLoop
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
