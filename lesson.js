//==============================
// lesson.js
// Phần 1
//==============================
if (typeof LESSONS === "undefined" || typeof VOCABULARY === "undefined") {
  alert("Dữ liệu bài học lỗi, vui lòng tải lại trang");
}

const params = new URLSearchParams(window.location.search);
let rawId = params.get("id");
let lessonId = parseInt(rawId);
// Xử lý id không hợp lệ
if (isNaN(lessonId) || lessonId < 1 || lessonId > LESSONS.length) {
  lessonId = 1;
}

let lesson = LESSONS.find(l => l.id === lessonId);
let words = VOCABULARY.filter(v => v.lesson === lessonId);

const lessonTitle = document.getElementById("lessonTitle");
const lessonDescription = document.getElementById("lessonDescription");
const lessonContent = document.getElementById("lessonContent");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

function initLesson(){
    if(!lesson){
        lessonContent.innerHTML=`
        <div class="card">
            <h2>Không tìm thấy bài học</h2>
        </div>
        `;
        return;
    }
    lessonTitle.innerHTML= lesson.title;
    lessonDescription.innerHTML= lesson.description;
    renderVocabulary();
    updateProgress();
}
//==============================
// Hiển thị từ vựng
//==============================
function renderVocabulary(){
    lessonContent.innerHTML = "";
    if(words.length===0){
        lessonContent.innerHTML=`
        <div class="card">
            <h2>Chưa có dữ liệu bài học.</h2>
        </div>
        `;
        return;
    }
    words.forEach((item,index)=>{
        lessonContent.innerHTML += `
        <div class="card">
            <div class="word">
                ${index+1}. ${item.vn}
            </div>
            <div class="chinese">
                ${item.cn}
            </div>
            <div class="pinyin">
                ${item.pinyin}
            </div>
            <div class="example">
                <b>🇻🇳 Ví dụ:</b><br>
                ${item.exampleVN}
                <br><br>
                <b>🇨🇳 示例：</b><br>
                ${item.exampleCN}
            </div>
        </div>
        `;
    });
}
//==============================
// Cập nhật tiến độ
//==============================
function updateProgress(){
    const total = LESSONS.length;
    const percent = (lessonId / total) * 100;
    progressBar.style.width = percent + "%";
    progressText.innerHTML = "Bài " + lessonId + " / " + total;
}
//==============================
// Điều hướng bài học
//==============================
function previousLesson(){
    if(lessonId>1){
        window.location.href = "lesson.html?id=" + (lessonId-1);
    }
}
function nextLesson(){
    if(lessonId<LESSONS.length){
        window.location.href = "lesson.html?id=" + (lessonId+1);
    }
}
//==============================
// Flashcard
//==============================
function openFlashcard(){
    window.location.href = "flashcard.html?id=" + lessonId;
}
//==============================
// Quiz
//==============================
function openQuiz(){
    window.location.href = "quiz.html?id=" + lessonId;
}
//==============================
// Trang chủ
//==============================
function goHome(){
    window.location.href = "index.html";
}
//==============================
// Khởi động
//==============================
document.addEventListener("DOMContentLoaded",function(){
    initLesson();
});
