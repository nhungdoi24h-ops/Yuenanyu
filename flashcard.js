//==============================
// flashcard.js
// Phần 1
//==============================
if (typeof LESSONS === "undefined" || typeof VOCABULARY === "undefined") {
  alert("Dữ liệu flashcard lỗi, tải lại trang");
}

const params = new URLSearchParams(window.location.search);
let rawId = params.get("id");
let lessonId = parseInt(rawId);
if (isNaN(lessonId) || lessonId < 1 || lessonId > LESSONS.length) {
  lessonId = 1;
}

const lesson = LESSONS.find(l => l.id === lessonId);
const words = VOCABULARY.filter(v => v.lesson === lessonId);
let currentIndex = 0;
let showFront = true;
const lessonTitle = document.getElementById("lessonTitle");
const lessonInfo = document.getElementById("lessonInfo");
const progressBar = document.getElementById("progressBar");
const vn = document.getElementById("vn");
const cn = document.getElementById("cn");
const pinyin = document.getElementById("pinyin");
const example = document.getElementById("example");

function initFlashcard(){
    if(!lesson){
        lessonTitle.innerHTML="Không tìm thấy bài học";
        lessonInfo.innerHTML="";
        return;
    }
    lessonTitle.innerHTML = lesson.title;
    lessonInfo.innerHTML = "Bài " + lessonId + " • " + words.length + " từ vựng";
    if(words.length===0){
        vn.innerHTML="Chưa có dữ liệu";
        cn.innerHTML="";
        pinyin.innerHTML="";
        example.innerHTML="";
        return;
    }
    renderCard();
}
//==============================
// Hiển thị Flashcard
//==============================
function renderCard(){
    const item = words[currentIndex];
    if(showFront){
        // Mặt trước: Tiếng Việt
        vn.innerHTML = item.vn;
        cn.innerHTML = "";
        pinyin.innerHTML = "";
        example.innerHTML = "";
    }else{
        // Mặt sau: Tiếng Trung + Pinyin + Ví dụ
        vn.innerHTML = item.vn;
        cn.innerHTML = item.cn;
        pinyin.innerHTML = item.pinyin;
        example.innerHTML = `
        <b>🇻🇳 Ví dụ:</b><br>
        ${item.exampleVN}
        <br><br>
        <b>🇨🇳 示例：</b><br>
        ${item.exampleCN}
        `;
    }
    updateProgress();
}
//==============================
// Thanh tiến độ
//==============================
function updateProgress(){
    const percent = ((currentIndex + 1) / words.length) * 100;
    progressBar.style.width = percent + "%";
    lessonInfo.innerHTML = "Bài " + lessonId + " • Từ " + (currentIndex + 1) + "/" + words.length;
}
//==============================
// Lật thẻ
//==============================
function flipCard(){
    showFront = !showFront;
    renderCard();
}
//==============================
// Từ tiếp theo
//==============================
function nextWord(){
    if(currentIndex < words.length - 1){
        currentIndex++;
        showFront = true;
        renderCard();
    }else{
        alert("Bạn đã học hết từ vựng của bài này.");
    }
}
//==============================
// Từ trước
//==============================
function previousWord(){
    if(currentIndex > 0){
        currentIndex--;
        showFront = true;
        renderCard();
    }
}
//==============================
// Quay lại bài học
//==============================
function backLesson(){
    window.location.href = "lesson.html?id=" + lessonId;
}
//==============================
// Trang chủ
//==============================
function goHome(){
    window.location.href = "index.html";
}
//==============================
// Hỗ trợ bàn phím
//==============================
document.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowRight":
            nextWord();
            break;
        case "ArrowLeft":
            previousWord();
            break;
        case " ":
        case "Enter":
            e.preventDefault();
            flipCard();
            break;
    }
});
//==============================
// Khởi động
//==============================
document.addEventListener("DOMContentLoaded",function(){
    initFlashcard();
});
