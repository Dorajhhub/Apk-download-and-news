/* ========================================
   서버 상태 체크 기능
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
   뉴스 목록 로딩 함수
======================================== */
async function loadNyangNews() {
    const newsContainer = document.getElementById('news-container');
    if (!newsContainer) return;

    // 경로: 현재 HTML 파일(/games/nyangrestauranttycoon/index.html) 기준 상대 경로
    const jsonPath = 'news.json'; 

    try {
        const response = await fetch(jsonPath);
        
        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태: ${response.status}`);
        }
        
        const newsData = await response.json();
        newsContainer.innerHTML = ''; 

        // 각 뉴스 항목을 HTML로 변환하여 컨테이너에 삽입
        newsData.forEach(item => {
            const link = document.createElement('a');
            // 클릭 시 상세 페이지로 이동하도록 경로 설정
            link.href = `./news/index.html?id=${item.id}`; 
            link.className = 'news-link-block'; 

            let contentHtml = '';
            if (Array.isArray(item.content)) {
                contentHtml = '<ul>' + item.content.map(li => `<li>${li}</li>`).join('') + '</ul>';
            } else {
                contentHtml = `<p>${item.content}</p>`;
            }

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
        console.error("뉴스 목록 데이터를 로드하는 중 오류 발생:", error);
        newsContainer.innerHTML = `<p style="color: red; text-align: center;">뉴스 목록 로딩에 실패했습니다. (${error.message})</p>`;
    }
}


/* ========================================
   뉴스 상세 정보를 불러오는 함수
======================================== */
async function loadNewsDetail() {
    const detailContainer = document.getElementById('news-detail-container');
    if (!detailContainer) return;

    // 1. URL에서 ID 값 추출 (예: .../news/id=1 에서 '1'을 추출)
    const url = window.location.pathname;
    const match = url.match(/id=(\d+)/); 

    if (!match || !match[1]) {
        detailContainer.innerHTML = '<h1>오류: 뉴스 ID를 찾을 수 없습니다.</h1>';
        return;
    }
    const newsId = parseInt(match[1]);

    // 2. JSON 데이터 로드 (경로 주의: /news/index.html 에서 ../news.json으로 가야 함)
    const jsonPath = '../news.json'; 

    try {
        const response = await fetch(jsonPath);
        if (!response.ok) throw new Error("JSON 파일을 로드할 수 없습니다.");
        
        const newsData = await response.json();
        
        // 3. ID와 일치하는 항목 찾기
        const item = newsData.find(n => n.id === newsId);

        if (!item) {
            detailContainer.innerHTML = `<h1>${newsId}번 게시물을 찾을 수 없습니다.</h1>`;
            return;
        }

        // 4. 상세 내용 렌더링
        let contentHtml = '';
        if (Array.isArray(item.content)) {
            contentHtml = '<ul>' + item.content.map(li => `<li>${li}</li>`).join('') + '</ul>';
        } else {
            contentHtml = `<p>${item.content}</p>`;
        }
        
        // 페이지 제목 및 본문 업데이트
        document.getElementById('page-title').textContent = item.title;
        detailContainer.innerHTML = `
            <article class="news-detail">
                <h1 style="margin-bottom: 5px;">${item.title}</h1>
                <p class="news-date" style="font-style: italic; color: #888;">${item.date}</p>
                ${item.image ? `<img src="../${item.image}" alt="${item.title}" class="news-detail-image">` : ''}
                <div class="news-detail-content">${contentHtml}</div>
                <hr style="margin: 30px 0;">
                <a href="../../index.html" class="download-button" style="margin-top: 10px;">← 목록으로 돌아가기</a>
            </article>
        `;

    } catch (error) {
        console.error("뉴스 상세 로딩 오류:", error);
        detailContainer.innerHTML = `<p style="color: red; text-align: center;">상세 정보를 로드하는 중 문제가 발생했습니다. (${error.message})</p>`;
    }
}


/* ========================================
   DOMContentLoaded 이벤트 공통 초기화
======================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ping.html 버튼 연결
    const pingBtn = document.querySelector("button[onclick='checkServer()']");
    if (pingBtn) {
        pingBtn.addEventListener("click", () => checkServer()); 
    }
    
    // 뉴스 목록 로드 (nyangrestauranttycoon/index.html)
    const listContainer = document.getElementById('news-container');
    if (listContainer) {
        loadNyangNews();
    }
    
    // 뉴스 상세 로드 (nyangrestauranttycoon/news/index.html)
    const detailContainer = document.getElementById('news-detail-container');
    if (detailContainer) {
        loadNewsDetail();
    }
});


/* ========================================
   기타 유틸 함수 예시
======================================== */
// 페이지 내 특정 섹션으로 스크롤
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}