import React, { useState, useEffect } from 'react';

const NyangNyangDescription = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news data from JSON file
    fetch(`${process.env.PUBLIC_URL}/news.json`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Filter news items that are specific to nyangnyang game
        const nyangNyangNews = data.filter(item => item.game === 'nyangnyang');
        setNews(nyangNyangNews);
      })
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  // Function to truncate content to 100 characters
  const truncateContent = (content) => {
    if (content.length <= 100) return content;
    return content.substring(0, 100) + '...';
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">냥냥식당타이쿤</h1>
        <p className="text-xl text-pink-100">귀여운 고양이들과 함께하는 식당 경영 게임</p>
      </div>
      
      <div className="p-8 md:p-10 bg-white">
        <div className="flex flex-col gap-6 sm:gap-10 items-center">
          <div className="w-full">
            <div className="bg-gray-200 border-2 border-dashed rounded-lg sm:rounded-xl w-full h-48 sm:h-64 md:h-80 flex items-center justify-center text-gray-500 text-sm sm:text-base">
              게임 스크린샷 예정
            </div>
          </div>
          
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">게임 소개</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              냥냥식당타이쿤을 플레이하세요! <br/><br/>
              귀여운 고양이 손님들에게 음식을 서빙하고, 수익을 올리며 식당을 점점 더 크게 성장시켜보세요.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs sm:text-sm">게임</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs sm:text-sm">타이쿤</span>
              <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs sm:text-sm">고양이</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">경영</span>
            </div>
            
            <a 
              href="https://kjh12.itch.io/nyangrestauranttycoon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-base sm:text-lg py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 text-center"
            >
              🎮 게임 다운로드
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">냥냥식당타이쿤 뉴스</h3>
          
          {news.length > 0 ? (
            <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
              {news.map((item) => (
                <div key={item.id} className="border-l-4 border-purple-500 pl-3 sm:pl-4 py-2 bg-white/50 p-3 sm:p-4 rounded-r-lg">
                  <h4 className="font-bold text-sm sm:text-base md:text-lg text-gray-800">{item.title}</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">{truncateContent(item.content)}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 pt-2">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-0"> {item.date}</p>
                    <a href={`#/news?id=${item.id}`} 
                       className="text-purple-500 hover:text-purple-700 text-xs sm:text-sm font-medium text-center sm:text-right">
                      더 보기
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center py-3 sm:py-4 text-sm sm:text-base">등록된 뉴스가 없습니다.</p>
          )}
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">게임 특징</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-pink-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-pink-100">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">😸</div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">귀여운 고양이 캐릭터</h4>
              <p className="text-xs sm:text-sm text-gray-600">다양한 고양이 캐릭터와 소품으로 식당을 꾸며보세요.</p>
            </div>
            <div className="bg-purple-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-purple-100">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏪</div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">식당 운영</h4>
              <p className="text-xs sm:text-sm text-gray-600">음식을 만들고 손님을 모셔 수익을 창출해보세요.</p>
            </div>
            <div className="bg-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-indigo-100">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🏆</div>
              <h4 className="font-bold text-base sm:text-lg text-gray-800 mb-1 sm:mb-2">업그레이드 시스템</h4>
              <p className="text-xs sm:text-sm text-gray-600">점점 더 나은 시설과 메뉴로 식당을 업그레이드하세요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NyangNyangDescription;
