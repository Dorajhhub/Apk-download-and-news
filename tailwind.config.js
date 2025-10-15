/** @type {import('tailwindcss').Config} */
module.exports = {
  // src 폴더 아래의 모든 js, jsx, ts, tsx 파일에서 Tailwind 클래스를 찾습니다.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 이 경로가 정확해야 스타일을 스캔합니다.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}