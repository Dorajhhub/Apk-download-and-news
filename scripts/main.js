/* ========================================
   서버 상태 체크 기능 (기존 코드)
======================================== */
async function checkServer(endpoint = "index.html") {
    // ... (기존 checkServer 함수 내용 유지)
    const statusEl = document.getElementById("status");
    if (!statusEl) return;

    statusEl.textContent = "⏳ 서버 확인 중...";
    try {
        const startTime = Date.now();
        const response = await fetch(endpoint, { cache: "no-store" });
        const endTime = Date.now();
        const elapsed = endTime - startTime;

        if (response.ok) {
            statusEl.innerHTML = `✅ <span class="ok">서버 정상 작동 (${elapsed}ms)</span>`;
        } else {
            statusEl.innerHTML = `❌ <span class="fail">서버 응답 오류 (코드: ${response.status})</span>`;
        }
    } catch (error) {
        statusEl.innerHTML = `❌ <span class="fail">서버 연결 실패</span>`;
    }
}


/* ========================================
   NEW: 냥냥 레스토랑 뉴스 로딩 함수
======================================== */
async function loadNyangNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    // JSON 파일 경로: 현재 HTML 파일(/games/nyangrestauranttycoon/index.html) 기준 상대 경로
    const jsonPath = 'news.json'; 

    try {
        const response = await fetch(jsonPath);
        
        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }
        
        const newsData = await response.json();
        
        // 뉴스 컨테이너 초기화
        newsContainer.innerHTML = ''; 

        // 각 뉴스 항목을 HTML로 변환하여 컨테이너에 삽입
        newsData.forEach(item => {
            const article = document.createElement('article');
            article.className = 'news-article'; // CSS 스타일링을 위한 클래스
            
            let contentHtml = '';
            
            // content가 배열인지 문자열인지 확인하여 렌더링
            if (Array.isArray(item.content)) {
                contentHtml = '<ul>' + item.content.map(li => `<li>${li}</li>`).join('') + '</ul>';
            } else {
                contentHtml = `<p>${item.content}</p>`;
            }

            article.innerHTML = `
                ${item.image ? `<img src="${item.image}" alt="${item.title}" class="news-image">` : ''}
                <h3>${item.title}</h3>
                <p class="news-date">${item.date}</p>
                ${contentHtml}
            `;
            newsContainer.appendChild(article);
        });

    } catch (error) {
        console.error("뉴스 데이터를 로드하는 중 오류 발생:", error);
        newsContainer.innerHTML = `<p style="color: red; text-align: center;">뉴스 로딩에 실패했습니다. (${error.message})</p>`;
    }
}


/* ========================================
   DOMContentLoaded 이벤트 공통 초기화 (기존 코드 수정)
======================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ping.html에서 버튼 연결 (기존 코드)
    const pingBtn = document.querySelector("button[onclick='checkServer()']");
    if (pingBtn) {
        // 기존 HTML의 onclick 대신 이벤트 리스너 사용 (더 권장되는 방식)
        pingBtn.addEventListener("click", () => checkServer()); 
    }
    
    // NEW: '냥냥 레스토랑 타이쿤' 페이지에서 뉴스 로딩 함수 호출
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        loadNyangNews();
    }
});

/* ========================================
   기타 유틸 함수 예시 (기존 코드)
======================================== */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}