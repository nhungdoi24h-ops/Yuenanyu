//==============================
// flashcard.js
//==============================
let lessonId = 1;
let lesson = null;
let words = [];
let currentIndex = 0;
let showFront = true;

const vn = document.getElementById("vn");
const cn = document.getElementById("cn");
const pinyin = document.getElementById("pinyin");
const example = document.getElementById("example");
const lessonTitle = document.getElementById("lessonTitle");
const lessonInfo = document.getElementById("lessonInfo");
const progressBar = document.getElementById("progressBar");

document.addEventListener("DOMContentLoaded",function(){
    if (typeof LESSONS === "undefined" || typeof VOCABULARY === "undefined") {
        alert("Dữ liệu flashcard lỗi, tải lại trang");
        return;
    }
    const params = new URLSearchParams(window.location.search);
    let rawId = params.get("id");
    let tempId = parseInt(rawId);
    if (!isNaN(tempId) && tempId >=1 && tempId <= LESSONS.length) {
        lessonId = tempId;
    }
    lesson = LESSONS.find(l => l.id === lessonId);
    words = VOCABULARY.filter(v => v.lesson === lessonId);
    initFlashcard();
});

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

function renderCard(){
    const item = words[currentIndex];
    if(showFront){
        vn.innerHTML = item.vn;
        cn.innerHTML = "";
        pinyin.innerHTML = "";
        example.innerHTML = "";
    }else{
        vn.innerHTML = item.vn;
        cn.innerHTML = item.cn;
        pinyin.innerHTML = item.pinyin;
        example.innerHTML = `
        <b>🇻🇳 Ví dụ:</b><br>${item.exampleVN}<br><br>
        <b>🇨🇳 示例：</b><br>${item.exampleCN}
        `;
    }
    updateProgress();
}

function updateProgress(){
    const percent = ((currentIndex + 1) / words.length) * 100;
    progressBar.style.width = percent + "%";
    lessonInfo.innerHTML = "Bài " + lessonId + " • Từ " + (currentIndex + 1) + "/" + words.length;
}
function flipCard(){ showFront = !showFront; renderCard(); }
function nextWord(){
    if(currentIndex < words.length -1){ currentIndex++; showFront=true; renderCard(); }
    else alert("Bạn đã học hết từ vựng của bài này.");
}
function previousWord(){
    if(currentIndex >0){ currentIndex--; showFront=true; renderCard(); }
}
function backLesson(){ window.location.href = "lesson.html?id=" + lessonId; }
function goHome(){ window.location.href = "index.html"; }

document.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowRight": nextWord(); break;
        case "ArrowLeft": previousWord(); break;
        case " ": case "Enter": e.preventDefault(); flipCard(); break;
    }
});
