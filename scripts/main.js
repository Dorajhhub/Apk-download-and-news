/* ========================================
   서버 상태 체크 기능 (기존 코드 유지)
======================================== */
async function checkServer(endpoint = "index.html") {
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
   냥냥 레스토랑 뉴스 로딩 함수 (수정됨)
======================================== */
async function loadNyangNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

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
            // FIX: 전체 아티클을 감싸는 <a> 링크 태그 생성
            const link = document.createElement('a');
            // 요청하신 경로 형식으로 href 설정 (현재 경로 기준 상대 경로)
            link.href = `./news/id=${item.id}`; 
            // CSS 스타일링을 위해 클래스 추가
            link.className = 'news-link-block'; 

            let contentHtml = '';
            
            if (Array.isArray(item.content)) {
                contentHtml = '<ul>' + item.content.map(li => `<li>${li}</li>`).join('') + '</ul>';
            } else {
                contentHtml = `<p>${item.content}</p>`;
            }

            // 아티클 내용을 링크 내부에 삽입
            link.innerHTML = `
                <article class="news-article">
                    ${item.image ? `<img src="${item.image}" alt="${item.title}" class="news-image">` : ''}
                    <h3>${item.title}</h3>
                    <p class="news-date">${item.date}</p>
                    ${contentHtml}
                </article>
            `;
            newsContainer.appendChild(link);
        });

    } catch (error) {
        console.error("뉴스 데이터를 로드하는 중 오류 발생:", error);
        newsContainer.innerHTML = `<p style="color: red; text-align: center;">뉴스 로딩에 실패했습니다. (${error.message})</p>`;
    }
}


/* ========================================
   DOMContentLoaded 이벤트 공통 초기화 (기존 코드 유지)
======================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ping.html에서 버튼 연결
    const pingBtn = document.querySelector("button[onclick='checkServer()']");
    if (pingBtn) {
        pingBtn.addEventListener("click", () => checkServer()); 
    }
    
    // '냥냥 레스토랑 타이쿤' 페이지에서 뉴스 로딩 함수 호출
    const newsContainer = document.getElementById('news-container');
    if (newsContainer) {
        loadNyangNews();
    }
});

/* ========================================
   기타 유틸 함수 예시 (기존 코드 유지)
======================================== */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}