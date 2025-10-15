import React from 'react';
// BrowserRouter, Routes, Route를 react-router-dom에서 임포트합니다.
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import PingChecker from './PingChecker'; // 새로 만든 PingChecker 컴포넌트 임포트

// 메인 점검 페이지 컴포넌트
const MaintenancePage = () => {
  const maintenanceTitle = "서버 점검 중!";
  const maintenanceMessage = [
    "서버 점검을 진행하고 있습니다.",
    "이번 점검은 몇일 내내 진행될 예정으로 리뉴얼이 예정되어 있습니다.",
    "또한 점검으로 냥냥식당타이쿤은 몇일간 플레이 할 수 없을 예정입니다.(곧 플레이 가능할겁니다.)",
    "대단히 죄송하며 빠르게 리뉴얼을 하도록 하겠습니다.",
    "감사합니다!!"
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-lg text-center border-t-8 border-yellow-500 transition duration-500 hover:shadow-xl">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4 tracking-tighter animate-pulse">
        {maintenanceTitle}
      </h1>
      
      <hr className="my-6 border-pink-200" />
      
      <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
        {maintenanceMessage.map((line, index) => (
          <p key={index} className={index === maintenanceMessage.length - 1 ? "mt-6 font-bold text-yellow-600 text-xl" : ""}>
            {line}
          </p>
        ))}
      </div>

      {/* /ping 링크 추가 */}

    </div>
  );
}

// 라우팅을 설정하는 메인 App 컴포넌트
function App() {
  return (
    // 라우팅을 위해 BrowserRouter로 전체 앱을 감싸줍니다.
    <HashRouter> 
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
        <Routes>
          {/* 기본 경로: 점검 페이지 */}
          <Route path="/" element={<MaintenancePage />} />
          
          {/* /ping 경로: 서버 상태 확인 페이지 */}
          <Route path="/ping" element={<PingChecker />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;