import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                jihucompany에 오신 것을 환영합니다!(속보 개발자 손 골절됨)
            </h1>
            <p className="text-lg text-gray-600 mb-10">
                현재 개발 중인 프로젝트들을 아래에서 확인해보세요.
            </p>

            <div className="border-t pt-8">
                <h2 className="text-3xl font-bold text-indigo-600 mb-6">
                    만들고 있는 앱
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                    {/* App Card */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            냥냥식당타이쿤
                        </h3>
                        <p className="text-gray-600 mb-4">
                            귀여운 고양이들과 함께 식당을 경영하는 타이쿤 게임입니다.
                        </p>
                        <Link 
                            to="/nyangnyang"
                            className="inline-block bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            자세히 보기
                        </Link>
                    </div>
                    
                    {/* Add more app cards here in the future */}

                </div>
            </div>
        </div>
    );
}

export default Home;