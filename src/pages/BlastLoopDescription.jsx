import React, { useState, useEffect } from "react";

const BlastLoopDescription = () => {
  return (
    <div className="max-w-4xl mx-auto overflow-hidden shadow-xl bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl">
      <div className="p-8 text-center text-white bg-gradient-to-r from-green-500 to-blue-600">
        <h1 className="mb-2 text-4xl font-bold md:text-5xl">BlastLoop</h1>
        <p className="text-xl text-green-100">뱀서라이크 게임의 새로운 혁명</p>
      </div>

      <div className="p-8 bg-white md:p-10">
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <div className="w-full">
            <div className="flex items-center justify-center w-full h-48 text-sm font-bold text-gray-700 border-2 border-dashed rounded-lg bg-gradient-to-br from-green-200 to-blue-200 sm:rounded-xl sm:h-64 md:h-80 sm:text-base">
              게임 스크린샷 예정
            </div>
          </div>

          <div className="w-full">
            <h2 className="mb-3 text-xl font-bold text-gray-800 sm:text-2xl sm:mb-4">
              게임 소개
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:mb-6">
              BlastLoop를 플레이하세요! <br />
              <br />
              뱀파이어 서바이버즈 스타일의 뱀서라이크 게임입니다. 수많은 적들을
              물리치며 성장하는 짧고 강렬한 게임플레이를 경험하세요.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-4 sm:gap-3 sm:mb-6">
              <span className="px-2 py-1 text-xs text-green-800 bg-green-100 rounded-full sm:text-sm">
                게임
              </span>
              <span className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-full sm:text-sm">
                뱀서라이크
              </span>
              <span className="px-2 py-1 text-xs text-indigo-800 bg-indigo-100 rounded-full sm:text-sm">
                슈팅
              </span>
              <span className="px-2 py-1 text-xs text-purple-800 bg-purple-100 rounded-full sm:text-sm">
                성장
              </span>
            </div>

            <button
              disabled
              className="w-full px-6 py-3 text-base font-bold text-center text-gray-500 bg-gray-300 rounded-lg cursor-not-allowed sm:text-lg sm:py-4 sm:px-8 sm:rounded-xl"
            >
              🎮 곧 출시 예정
            </button>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-200">
          <h3 className="mb-4 text-xl font-bold text-center text-gray-800 sm:text-2xl sm:mb-6">
            BlastLoop 뉴스
          </h3>

          <div className="mb-6 space-y-4 sm:space-y-5 sm:mb-8">
            <div className="p-3 py-2 pl-3 border-l-4 border-green-500 rounded-r-lg sm:pl-4 bg-white/50 sm:p-4">
              <h4 className="text-sm font-bold text-gray-800 sm:text-base md:text-lg">
                🐍 뱀서라이크의 새로운 시도
              </h4>
              <p className="mt-1 text-xs text-gray-600 sm:text-sm md:text-base">
                BlastLoop가 soon에 출시될 예정입니다. 뱀파이어 서바이버즈
                스타일의 게임을 기대해주세요!
              </p>
              <div className="flex flex-col justify-between pt-2 mt-2 sm:flex-row sm:items-center">
                <p className="mb-1 text-xs text-gray-500 sm:text-sm sm:mb-0">
                  {" "}
                  2025-11-04
                </p>
                <span className="text-xs font-medium text-center text-green-500 sm:text-sm sm:text-right">
                  업데이트
                </span>
              </div>
            </div>
          </div>

          <h3 className="mb-4 text-xl font-bold text-center text-gray-800 sm:text-2xl sm:mb-6">
            게임 특징
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-6">
            <div className="p-4 border border-green-100 rounded-lg bg-green-50 sm:p-6 sm:rounded-xl">
              <div className="mb-2 text-2xl sm:text-3xl sm:mb-3">🐍</div>
              <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">
                뱀서라이크
              </h4>
              <p className="text-xs text-gray-600 sm:text-sm">
                뱀파이어 서바이버즈 스타일의 게임입니다.
              </p>
            </div>
            <div className="p-4 border border-blue-100 rounded-lg bg-blue-50 sm:p-6 sm:rounded-xl">
              <div className="mb-2 text-2xl sm:text-3xl sm:mb-3">🎯</div>
              <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">
                자동 공격
              </h4>
              <p className="text-xs text-gray-600 sm:text-sm">
                자동 공격 시스템으로 쉬운 조작이 가능합니다.
              </p>
            </div>
            <div className="p-4 border border-indigo-100 rounded-lg bg-indigo-50 sm:p-6 sm:rounded-xl">
              <div className="mb-2 text-2xl sm:text-3xl sm:mb-3">📈</div>
              <h4 className="mb-1 text-base font-bold text-gray-800 sm:text-lg sm:mb-2">
                캐릭터 성장
              </h4>
              <p className="text-xs text-gray-600 sm:text-sm">
                적을 물리치며 캐릭터를 성장시킬 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlastLoopDescription;
