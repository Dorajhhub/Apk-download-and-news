import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PingChecker from './PingChecker';
import ServerNotice from './pages/ServerNotice';
import Home from './pages/Home';
import NyangNyangDescription from './pages/NyangNyangDescription';
import BlastLoopDescription from './pages/BlastLoopDescription';
import NewsDetail from './pages/NewsDetail';
import Navbar from './components/Navbar';
import { servermaintenance } from './config';

// A layout component that includes the Navbar and a placeholder for the page content
const AppLayout = () => (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
    <Navbar />
    <main className="p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <Outlet /> {/* This will render the matched child route element */}
    </main>
  </div>
);

function App() {
  return (
    <HashRouter>
      <Routes>
        {servermaintenance ? (
          // Maintenance routes
          <>
            <Route path="/servernotice" element={
                <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
                    <ServerNotice />
                </div>
            } />
            <Route path="*" element={<Navigate to="/servernotice" replace />} />
          </>
        ) : (
          // Main app routes with layout
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ping" element={<PingChecker />} />
            <Route path="/nyangnyang" element={<NyangNyangDescription />} />
            <Route path="/blastloop" element={<BlastLoopDescription />} />
            <Route path="/news" element={<NewsDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        )}
      </Routes>
    </HashRouter>
  );
}

export default App;