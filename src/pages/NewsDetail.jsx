import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const NewsDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("News ID not provided");
      setLoading(false);
      return;
    }

    // Fetch news data from JSON file
    fetch(`${process.env.PUBLIC_URL}/news.json`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const numericId = parseInt(id, 10);
        if (isNaN(numericId)) {
          setError("Invalid news ID provided");
          setLoading(false);
          return;
        }
        const item = data.find((item) => item.id === numericId);
        if (item) {
          setNewsItem(item);
        } else {
          setError("News item not found");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("Error loading news item");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center py-10">
          <div className="w-12 h-12 mx-auto mb-4 border-b-2 border-indigo-500 rounded-full animate-spin"></div>
          <p className="text-gray-600">뉴스를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center py-10">
          <div className="text-xl font-bold text-red-500">Error</div>
          <p className="text-gray-600 mt-2">{error}</p>
          <a 
            href="#/" 
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <div className="text-center py-10">
          <div className="text-xl font-bold text-gray-500">
            뉴스를 찾을 수 없습니다
          </div>
          <a 
            href="#/" 
            className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            메인 페이지로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto overflow-hidden shadow-xl bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl">
      <div className="p-6 text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 sm:p-8">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          {newsItem.title}
        </h1>
        <p className="text-base text-indigo-100 sm:text-lg">{newsItem.date}</p>
      </div>

      <div className="p-6 bg-white sm:p-8">
        <div className="prose max-w-none">
          <div className="mb-6 text-base leading-relaxed text-gray-700 sm:mb-8 sm:text-lg whitespace-pre-line">
            {newsItem.content.replace(/\\n/g, '\n')}
          </div>

          <div className="pt-6 mt-6 border-t border-gray-200">
            <h3 className="mb-4 text-lg font-bold text-gray-800 sm:text-xl">기사 정보</h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
              <div className="p-3 rounded-lg bg-gray-50 sm:p-4">
                <p className="text-xs text-gray-600 sm:text-sm">게임</p>
                <p className="font-medium text-gray-800">
                  {newsItem.game === "nyangnyang" ? "냥냥식당타이쿤" : "전체"}
                </p>
              </div>
              <div className="p-3 rounded-lg bg-gray-50 sm:p-4">
                <p className="text-xs text-gray-600 sm:text-sm">날짜</p>
                <p className="font-medium text-gray-800">{newsItem.date}</p>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 sm:mt-10 border-t border-gray-200">
            <a
              href="#/"
              className="flex items-center justify-center font-medium text-indigo-600 hover:text-indigo-800 py-2 px-4 rounded-lg hover:bg-indigo-50 sm:inline-block sm:w-auto"
            >
              ← 메인 페이지로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
