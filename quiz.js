//==============================
// quiz.js
//==============================
let lessonId = 1;
let lesson = null;
let words = [];
let questions = [];
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let answered = false;

const lessonTitle = document.getElementById("lessonTitle");
const quizInfo = document.getElementById("quizInfo");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");
const answers = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const result = document.getElementById("result");

document.addEventListener("DOMContentLoaded",function(){
    if (typeof LESSONS === "undefined" || typeof VOCABULARY === "undefined") {
        alert("Dữ liệu quiz lỗi, vui lòng tải lại trang");
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
    initQuiz();
});

function initQuiz(){
    if(!lesson){
        lessonTitle.innerHTML = "Không tìm thấy bài học";
        return;
    }
    lessonTitle.innerHTML = lesson.title;
    quizInfo.innerHTML = "Bài " + lessonId + " • " + words.length + " câu hỏi";
    createQuestions();
    showQuestion();
}
function createQuestions(){
    questions = [];
    words.forEach(word=>{
        let options = [word.cn];
        while(options.length < 4){
            let random = VOCABULARY[Math.floor(Math.random() * VOCABULARY.length)].cn;
            if(!options.includes(random)) options.push(random);
        }
        options.sort(()=>Math.random()-0.5);
        questions.push({vn:word.vn, answer:word.cn, options:options});
    });
}
function showQuestion(){
    answered = false; selectedAnswer = null;
    const q = questions[currentQuestion];
    questionNumber.innerHTML = "Câu " + (currentQuestion + 1) + " / " + questions.length;
    question.innerHTML = q.vn;
    answers.innerHTML = "";
    q.options.forEach(option=>{
        const div = document.createElement("div");
        div.className = "answer";
        div.innerHTML = option;
        div.onclick = function(){
            document.querySelectorAll(".answer").forEach(item=>item.classList.remove("selected"));
            div.classList.add("selected");
            selectedAnswer = option;
        };
        answers.appendChild(div);
    });
    updateProgress();
    result.innerHTML = "";
}
function updateProgress(){
    const percent = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = percent + "%";
}
function checkAnswer(){
    if(answered) return;
    if(selectedAnswer === null){ alert("Vui lòng chọn một đáp án."); return; }
    answered = true;
    const q = questions[currentQuestion];
    const items = document.querySelectorAll(".answer");
    items.forEach(item=>{
        item.style.pointerEvents = "none";
        if(item.innerHTML === q.answer) item.classList.add("correct");
        if(selectedAnswer === item.innerHTML && selectedAnswer !== q.answer) item.classList.add("wrong");
    });
    if(selectedAnswer === q.answer){
        score++;
        result.innerHTML="✅ Chính xác"; result.style.color="#4CAF50";
    }else{
        result.innerHTML= "❌ Đáp án đúng: " + q.answer; result.style.color="#F44336";
    }
}
function nextQuestion(){
    if(currentQuestion < questions.length -1) { currentQuestion++; showQuestion(); }
    else showFinalResult();
}
function previousQuestion(){
    if(currentQuestion >0) { currentQuestion--; showQuestion(); }
}
function showFinalResult(){
    const percent = Math.round((score / questions.length) * 100);
    questionNumber.innerHTML = "Hoàn thành";
    question.innerHTML = "Bạn trả lời đúng " + score + "/" + questions.length + " câu.";
    answers.innerHTML = "";
    result.innerHTML = "Điểm: " + percent + "%";
    if(percent >= 80){
        result.style.color = "#4CAF50";
        result.innerHTML += "<br>🎉 Xuất sắc!";
    }else if(percent >= 60){
        result.style.color = "#FF9800";
        result.innerHTML += "<br>👍 Khá tốt!";
    }else{
        result.style.color = "#F44336";
        result.innerHTML += "<br>📚 Hãy ôn tập thêm nhé!";
    }
    progressBar.style.width = "100%";
}
function restartQuiz(){
    currentQuestion = 0; score = 0; createQuestions(); showQuestion();
}
function backLesson(){ window.location.href = "lesson.html?id=" + lessonId; }
function goHome(){ window.location.href = "index.html"; }

document.addEventListener("keydown",function(e){
    switch(e.key){
        case "ArrowLeft": previousQuestion(); break;
        case "ArrowRight": nextQuestion(); break;
        case "Enter": checkAnswer(); break;
    }
});
