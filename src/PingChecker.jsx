import React, { useState } from 'react';
import axios from 'axios';

// 서버의 핑을 확인할 대상 URL입니다.
// ⚠️ 이 URL을 실제 서버의 상태 확인 엔드포인트(예: /api/ping)로 변경해야 합니다.
const TARGET_URL = 'https://dorajhhub.github.io/Apk-download-and-news/#/ping'; 

const PingChecker = () => {
  const [latency, setLatency] = useState(null); // 지연 시간 (ms)
  const [status, setStatus] = useState('ready'); // 상태: ready, checking, success, error

  const checkServerStatus = async () => {
    setStatus('checking');
    setLatency(null);

    const startTime = Date.now();
    
    try {
      // ⚠️ 실제 서버 엔드포인트로 GET 요청을 보냅니다.
      await axios.get(TARGET_URL); 

      const endTime = Date.now();
      const measuredLatency = endTime - startTime;
      
      setLatency(measuredLatency);
      setStatus('success');
      
    } catch (error) {
      // 요청 실패 (4xx, 5xx 에러 또는 네트워크 오류)
      setLatency(null);
      setStatus('error');
      console.error("Server check failed:", error);
    }
  };
  
  // 상태에 따른 메시지 및 스타일 정의
  let statusText, statusColor;
  if (status === 'checking') {
    statusText = '서버 상태 확인 중...';
    statusColor = 'text-blue-500';
  } else if (status === 'success') {
    statusText = `서버 응답 시간: ${latency}ms`;
    statusColor = 'text-green-600 font-bold';
  } else if (status === 'error') {
    statusText = '서버에 연결할 수 없습니다. (오류 발생)';
    statusColor = 'text-red-600 font-bold';
  } else {
    statusText = '아래 버튼을 눌러 서버 상태를 확인하세요.';
    statusColor = 'text-gray-500';
  }

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">서버 상태 확인 (/ping)</h2>
      
      <p className={`text-xl mb-8 transition-colors ${statusColor}`}>
        {statusText}
      </p>

      <button
        onClick={checkServerStatus}
        disabled={status === 'checking'}
        className={`w-full py-3 px-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md
          ${status === 'checking' 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 text-white hover:shadow-xl'
          }`}
      >
        {status === 'checking' ? '확인 중...' : '서버 상태 확인하기'}
      </button>

      {/* 성공 시 로딩 시간 표시 */}
      {status === 'success' && (
        <div className="mt-4 text-sm text-gray-500">
          측정 시간은 네트워크 환경에 따라 달라질 수 있습니다.
        </div>
      )}
    </div>
  );
};

export default PingChecker;