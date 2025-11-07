import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
            .then(data => setNews(data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    // Function to truncate content to 100 characters
    const truncateContent = (content) => {
        if (content.length <= 100) return content;
        return content.substring(0, 100) + '...';
    };
    return (
        <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 md:p-12 mb-8 sm:mb-10 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-500"></div>
                <div className="absolute top-5 right-5 w-10 h-10 sm:w-20 sm:h-20 bg-yellow-300 rounded-full opacity-10"></div>
                <div className="absolute bottom-5 left-5 w-14 h-14 sm:w-32 sm:h-32 bg-pink-300 rounded-full opacity-10"></div>
                
                <div className="relative z-10 py-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-4 animate-fade-in">
                        jihu<span className="symbol-container animate-spin">@</span>company에 오신 것을 환영합니다!
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2 text-indigo-100">혁신적인 앱과 게임 개발</p>
                    <p className="text-base sm:text-lg text-indigo-200 mb-4 sm:mb-8">개발자 손 골절 중에도 열정은 멈추지 않습니다! 😊</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        <Link 
                            to="/nyangnyang" 
                            className="bg-white text-indigo-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-base sm:text-lg"
                        >
                            🎮 냥냥식당타이쿤
                        </Link>
                        <Link 
                            to="/ping" 
                            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg sm:rounded-xl hover:bg-white hover:text-indigo-600 transition-all text-base sm:text-lg"
                        >
                            📡 서버 상태 확인
                        </Link>
                    </div>
                </div>
            </div>

            {/* Updates/News Section */}
            <div className="card mb-10 gradient-bg">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div className="bg-red-100 text-red-800 text-sm font-bold px-4 py-2 rounded-full mr-3 flex items-center mb-2 sm:mb-0">
                        <span className="h-2 w-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                        LIVE
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">최신 업데이트</h2>
                </div>
                
                <div className="space-y-5">
                    {news.map((item) => (
                        <div key={item.id} className="border-l-4 border-blue-500 pl-4 py-2 bg-white/50 p-3 sm:p-4 rounded-r-lg">
                            <h3 className="font-bold text-base sm:text-lg text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm sm:text-base mt-1">{truncateContent(item.content)}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2 pt-2">
                                <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-0"> {item.date}</p>
                                <a href={`#/news?id=${item.id}`} 
                               className="text-blue-500 hover:text-blue-700 text-sm font-medium text-center sm:text-right">
                                더 보기
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div className="card gradient-bg">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-center">우리의 프로젝트</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* 냥냥식당타이쿤 Card */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
                        <div className="bg-gradient-to-br from-pink-200 to-purple-200 border-2 border-dashed rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 mx-auto flex items-center justify-center">
                            <span className="text-xl sm:text-2xl">😸</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">냥냥식당타이쿤</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">
                            귀여운 고양이들과 함께 식당을 경영하는 타이쿤 게임입니다.
                        </p>
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full">게임</span>
                            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">타이쿤</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">고양이</span>
                        </div>
                        <Link 
                            to="/nyangnyang"
                            className="w-full btn-primary block text-center py-2 sm:py-3 text-sm sm:text-base"
                        >
                            자세히 보기 & 다운로드
                        </Link>
                    </div>
                    
                    {/* BlastLoop Card */}
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100">
                        <div className="bg-gradient-to-br from-green-200 to-blue-200 border-2 border-dashed rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 mx-auto flex items-center justify-center">
                            <span className="text-xl sm:text-2xl">🐍</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">BlastLoop</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center">
                            뱀파이어 서바이버즈 스타일의 게임
                        </p>
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">게임</span>
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">뱀서라이크</span>
                        </div>
                        <Link 
                            to="/blastloop"
                            className="w-full btn-primary block text-center py-2 sm:py-3 text-sm sm:text-base"
                        >
                            자세히 보기 & 다운로드
                        </Link>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-md border border-green-100 flex flex-col">
                        <div className="bg-gradient-to-br from-green-200 to-teal-200 border-2 border-dashed rounded-lg sm:rounded-xl w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4 mx-auto flex items-center justify-center">
                            <span className="text-xl sm:text-2xl">💡</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 text-center">Coming Soon</h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-center flex-grow">
                            곧 공개될 새로운 프로젝트를 기대해주세요!
                        </p>
                        <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">준비중</span>
                        </div>
                        <button 
                            disabled
                            className="w-full bg-gray-300 text-gray-500 font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg cursor-not-allowed text-sm sm:text-base"
                        >
                            곧 공개 예정
                        </button>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-10">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg transform transition-transform hover:scale-105">
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">1+</div>
                    <div className="text-sm sm:text-lg">완성된 프로젝트</div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg transform transition-transform hover:scale-105">
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">3+</div>
                    <div className="text-sm sm:text-lg">개발 중 프로젝트</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white text-center shadow-lg transform transition-transform hover:scale-105">
                    <div className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
                    <div className="text-sm sm:text-lg">서버 운영</div>
                </div>
            </div>
        </div>
    );
}

export default Home;