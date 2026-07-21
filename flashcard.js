//==============================
// flashcard.js 美化升级版
//==============================
let lessonId = 1;
let lesson = null;
let words = [];
let currentIndex = 0;
let showFront = true;

const flipWrap = document.getElementById("flipWrap");
const vn = document.getElementById("vn");
const vnBack = document.getElementById("vnBack");
const cn = document.getElementById("cn");
const pinyin = document.getElementById("pinyin");
const example = document.getElementById("example");
const lessonTitle = document.getElementById("lessonTitle");
const lessonInfo = document.getElementById("lessonInfo");
const progressBar = document.getElementById("progressBar");

document.addEventListener("DOMContentLoaded",function(){
    if (typeof window.LESSONS === "undefined" || typeof window.VOCABULARY === "undefined") {
        alert("Dữ liệu tải lỗi, làm mới trang");
        return;
    }
    const params = new URLSearchParams(window.location.search);
    let rawId = params.get("id");
    let tempId = parseInt(rawId);
    if (!isNaN(tempId) && tempId >=1 && tempId <= window.LESSONS.length) {
        lessonId = tempId;
    }
    lesson = window.LESSONS.find(l => l.id === lessonId);
    words = window.VOCABULARY.filter(v => v.lesson === lessonId);
    initFlashcard();
});

function initFlashcard(){
    if(!lesson){
        lessonTitle.innerHTML="Không tìm thấy bài học";
        lessonInfo.innerHTML="";
        return;
    }
    lessonTitle.innerHTML = lesson.title;
    lessonInfo.innerHTML = `Bài ${lessonId} • ${words.length} từ vựng`;
    if(words.length===0){
        vn.innerHTML="Chưa có từ vựng bài này";
        return;
    }
    renderCard();
}

function renderCard(){
    const item = words[currentIndex];
    vn.innerText = item.vn;
    vnBack.innerText = item.vn;
    cn.innerText = item.cn;
    pinyin.innerText = item.pinyin;
    example.innerHTML = `
    <b>🇻🇳 Ví dụ:</b> ${item.exampleVN}<br>
    <b>🇨🇳 示例：</b> ${item.exampleCN}
    `;
    updateProgress();
}

function updateProgress(){
    const percent = ((currentIndex + 1) / words.length) * 100;
    progressBar.style.width = percent + "%";
    lessonInfo.innerHTML = `Bài ${lessonId} • Từ ${currentIndex+1}/${words.length}`;
}

// 3D翻转切换类
function flipCard(){
    showFront = !showFront;
    flipWrap.classList.toggle("flip-active");
}

function nextWord(){
    if(currentIndex < words.length -1){
        currentIndex++;
        showFront = true;
        flipWrap.classList.remove("flip-active");
        renderCard();
    }else alert("Đã học hết toàn bộ từ bài này!");
}
function previousWord(){
    if(currentIndex >0){
        currentIndex--;
        showFront = true;
        flipWrap.classList.remove("flip-active");
        renderCard();
    }
}
function backLesson(){ window.location.href = "lesson.html?id=" + lessonId; }
function goHome(){ window.location.href = "index.html"; }

// 键盘快捷键
document.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowRight": nextWord(); break;
        case "ArrowLeft": previousWord(); break;
        case " ": case "Enter": e.preventDefault(); flipCard(); break;
    }
});
