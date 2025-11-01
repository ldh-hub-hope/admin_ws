// 네비게이션 활성화 상태 관리
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // 모든 링크에서 active 클래스 제거
    navLinks.forEach((l) => l.classList.remove("active"));

    // 클릭된 링크에 active 클래스 추가
    this.classList.add("active");
  });
});

// 프로필 드롭다운 관리
const profileButton = document.getElementById("profileButton");
const dropdownMenu = document.getElementById("dropdownMenu");

profileButton.addEventListener("click", function (e) {
  e.stopPropagation();
  profileButton.classList.toggle("active");
  dropdownMenu.classList.toggle("active");
});

// 드롭다운 외부 클릭 시 닫기
document.addEventListener("click", function (e) {
  if (!profileButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    profileButton.classList.remove("active");
    dropdownMenu.classList.remove("active");
  }
});

// 로그아웃 함수
function handleLogout() {
  if (confirm("로그아웃 하시겠습니까?")) {
    alert("로그아웃 되었습니다.");
    // 실제로는 여기서 로그아웃 API 호출
    // window.location.href = '/logout';
  }
}
