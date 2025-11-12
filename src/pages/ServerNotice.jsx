import React, { useState, useEffect } from "react";
import { maintenanceEndTime } from "../config";

const ServerNotice = () => {
  const maintenanceTitle = "서버 점검 중!";
  const maintenanceMessage = [
    "서버 점검을 진행하고 있습니다.",
    "이번 점검은 일부 테스트가 예정되어 있습니다.",
    "대단히 죄송하며 빠르게 테스트를 진행하겠습니다. ",
    "감사합니다!!",
  ];

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [currentClockIndex, setCurrentClockIndex] = useState(0);
  const [showClock, setShowClock] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  // Clock emojis array
  const clockEmojis = ["🕛", "🕒", "🕕", "🕘"];

  useEffect(() => {
    // Convert maintenanceEndTime to a Date object
    const endTime = new Date(maintenanceEndTime);

    const updateTimer = () => {
      const now = new Date();
      const difference = endTime - now;

      if (difference <= 0) {
        setHasEnded(true);
        setShowClock(false);
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    };

    // Update timer immediately
    updateTimer();

    // Update timer every second
    const timer = setInterval(updateTimer, 1000);

    // Update clock emoji every second to cycle through all options
    const clockTimer = setInterval(() => {
      setCurrentClockIndex((prevIndex) => (prevIndex + 1) % clockEmojis.length);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(clockTimer);
    };
  }, []);

  const formatTime = (time) => {
    const { hours, minutes, seconds } = time;

    if (hours > 0) {
      return `${hours}시간 ${minutes}분 ${seconds}초`;
    } else if (minutes > 0) {
      return `${minutes}분 ${seconds}초`;
    } else {
      return `${seconds}초`;
    }
  };

  const handleTryAgain = () => {
    window.location.hash = "#/";
    window.location.reload();
  };

  return (
    <div className="relative max-w-2xl p-4 mx-auto overflow-hidden text-center border-2 border-yellow-200 shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl sm:rounded-3xl sm:p-6 md:p-8 md:p-12">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
      <div className="absolute w-8 h-8 bg-yellow-200 rounded-full top-2 right-2 sm:w-16 sm:h-16 opacity-20"></div>
      <div className="absolute w-12 h-12 bg-orange-200 rounded-full bottom-2 left-2 sm:w-24 sm:h-24 opacity-20"></div>

      <div className="relative z-10 py-4">
        <div className="flex justify-center mb-4">
          <div className="p-2 bg-yellow-100 rounded-full sm:p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-yellow-600 sm:h-12 sm:w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-yellow-700 sm:text-3xl md:text-4xl lg:text-5xl sm:mb-4">
          {maintenanceTitle}
        </h1>

        <div className="w-16 h-1 mx-auto mb-4 rounded-full sm:w-24 sm:h-1 bg-gradient-to-r from-yellow-400 to-orange-400 sm:mb-8"></div>

        <div className="max-w-xs mx-auto space-y-2 text-base leading-relaxed text-gray-700 sm:space-y-4 sm:text-lg sm:max-w-lg">
          {maintenanceMessage.map((line, index) => (
            <p
              key={index}
              className={`p-2 sm:p-3 rounded-lg text-sm sm:text-base ${
                index === 0 ? "bg-yellow-100 font-semibold" : ""
              } ${
                index === maintenanceMessage.length - 1
                  ? "mt-4 sm:mt-6 font-bold text-orange-600 text-lg sm:text-xl bg-orange-100"
                  : ""
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="mt-6 sm:mt-10">
          {!hasEnded ? (
            <div className="inline-flex flex-col items-center">
              <div className="mb-2 text-5xl">
                {clockEmojis[currentClockIndex]}
              </div>
              <div className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-400 sm:py-3 sm:px-8 animate-pulse sm:text-base">
                점검 완료 예정: {formatTime(timeLeft)} 남음
              </div>
            </div>
          ) : (
            <div className="inline-flex flex-col items-center">
              <div className="mb-2 text-5xl">🕛</div>
              <div className="px-4 py-2 text-sm font-bold text-white rounded-full shadow-lg bg-gradient-to-r from-yellow-400 to-orange-400 sm:py-3 sm:px-8 sm:text-base">
                점검 완료 예정일: 조만간
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 sm:mt-10">
          <button
            onClick={handleTryAgain}
            className="px-6 py-3 text-base font-bold text-white transition-all transform shadow-lg bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:from-indigo-700 hover:to-purple-700 hover:scale-105 sm:px-8 sm:py-4 sm:text-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServerNotice;
