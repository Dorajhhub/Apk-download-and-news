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
   DOMContentLoaded 이벤트 공통 초기화
======================================== */
document.addEventListener("DOMContentLoaded", () => {
    // ping.html에서 버튼 연결
    const pingBtn = document.querySelector("button[onclick='checkServer()']");
    if (pingBtn) {
        pingBtn.addEventListener("click", () => checkServer());
    }

    // 여기에 다른 공통 초기화 함수 추가 가능
});

/* ========================================
   기타 유틸 함수 예시
======================================== */
// 페이지 내 특정 섹션으로 스크롤
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}