import React from 'react';

const NyangNyangDescription = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">냥냥식당타이쿤</h1>
      
      <div className="text-center mb-8">
        <a 
          href="https://kjh12.itch.io/nyangrestauranttycoon" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors text-lg"
        >
          게임 다운로드
        </a>
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <h2 className="text-2xl font-semibold">게임 설명</h2>
        <p>
          냥냥식당타이쿤을 플레이하세요! <br/><br/>
          손님(고양이다냥)에게 서빙을 하고 돈을 얻으세요!<br/>
        </p>
      </div>
    </div>
  );
};

export default NyangNyangDescription;
