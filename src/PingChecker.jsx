import React, { useState } from 'react';
import axios from 'axios';

const TARGET_URL = 'https://dorajhhub.github.io/Apk-download-and-news/'; 

const PingChecker = () => {
  const [latency, setLatency] = useState(null); 
  const [status, setStatus] = useState('ready'); 

  const checkServerStatus = async () => {
    setStatus('checking');
    setLatency(null);

    const startTime = Date.now();
    
    try {
      await axios.get(`${TARGET_URL}?_=${new Date().getTime()}`); 

      const endTime = Date.now();
      const measuredLatency = endTime - startTime;
      
      setLatency(measuredLatency);
      setStatus('success');
      
    } catch (error) {
      setLatency(null);
      setStatus('error');
      console.error("Server check failed:", error);
    }
  };
  
  // Status indicators
  const getStatusIndicator = () => {
    if (status === 'checking') {
      return (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mr-3"></div>
          <span>서버 상태 확인 중...</span>
        </div>
      );
    } else if (status === 'success') {
      return (
        <div className="flex items-center justify-center text-green-600">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
          <span className="font-bold">서버 응답 시간: {latency}ms</span>
        </div>
      );
    } else if (status === 'error') {
      return (
        <div className="flex items-center justify-center text-red-600">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
          <span className="font-bold">서버에 연결할 수 없습니다. (오류 발생)</span>
        </div>
      );
    } else {
      return (
        <span className="text-gray-500">아래 버튼을 눌러 서버 상태를 확인하세요.</span>
      );
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 md:p-10 border border-gray-100">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">서버 상태 확인</h2>
        <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      <div className="flex justify-center mb-6 sm:mb-10">
        <div className="relative w-24 sm:w-32 h-24 sm:h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-white border-2 sm:border-4 border-gray-200">
          <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-transparent animate-ping opacity-20" 
               style={{ borderColor: status === 'success' ? '#10B981' : status === 'error' ? '#EF4444' : '#3B82F6' }}></div>
          <div className="text-xl sm:text-2xl font-bold text-gray-700">
            {latency !== null ? `${latency}ms` : '--'}
          </div>
        </div>
      </div>
      
      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-200">
        <div className="text-base sm:text-lg min-h-[28px] flex items-center justify-center">
          {getStatusIndicator()}
        </div>
      </div>

      <button
        onClick={checkServerStatus}
        disabled={status === 'checking'}
        className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl text-base sm:text-lg font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg
          ${status === 'checking' 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:shadow-2xl'
          }`}
      >
        <div className="flex items-center justify-center">
          {status === 'checking' && (
            <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {status === 'checking' ? '확인 중...' : '서버 상태 확인하기'}
        </div>
      </button>

      {status === 'success' && (
        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500 bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-100">
          <p>측정 시간은 네트워크 환경에 따라 달라질 수 있습니다.</p>
          <div className="flex justify-center mt-2">
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PingChecker;