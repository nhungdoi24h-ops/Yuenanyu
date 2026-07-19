/*=========================================
 VietMiniApp v1.0
 app.js
=========================================*/

const APP = {
    version: "1.0.0",
    name: "VietMiniApp"
};

/*==============================
 Khởi động ứng dụng
==============================*/
document.addEventListener("DOMContentLoaded", init);

function init() {

    console.log(APP.name + " " + APP.version);

    loadTheme();
    loadFavorites();
    updateProgress();

}

/*==============================
 Điều hướng
==============================*/

function go(page) {
    window.location.href = page;
}

function openCourse() {
    go("course.html");
}

function openAlphabet() {
    go("alphabet.html");
}

function openVocabulary(){

    window.location.href = "vocabulary.html";

}

function openFlashcard(){

window.location.href="flashcard.html";

}

function openGrammar() {
    alert("🚧 Chức năng đang phát triển.");
}

function openListening() {
    alert("🚧 Chức năng đang phát triển.");
}

function openSpeaking() {
    alert("🚧 Chức năng đang phát triển.");
}

function openQuiz(){

window.location.href="quiz.html";

}

function openDictionary() {
    alert("🚧 Chức năng đang phát triển.");
}

function openFavorites() {
    go("favorites.html");
}

function openProgress() {
    go("progress.html");
}

function openSettings() {
    go("settings.html");
}

/*==============================
 Tiếp tục học
==============================*/

const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.addEventListener("click", function () {

        let lesson = localStorage.getItem("currentLesson");

        if (lesson) {

            go(lesson);

        } else {

            go("alphabet.html");

        }

    });

}

/*==============================
 Theme
==============================*/

function toggleDarkMode() {

    document.body.classList.toggle("dark");

    saveTheme();

}

function saveTheme() {

    localStorage.setItem(

        "theme",

        document.body.classList.contains("dark")

    );

}

function loadTheme() {

    let theme = localStorage.getItem("theme");

    if (theme === "true") {

        document.body.classList.add("dark");

    }

}

/*==============================
 Tiến độ
==============================*/

function saveCurrentLesson(page) {

    localStorage.setItem(

        "currentLesson",

        page

    );

}

function completeLesson(id) {

    localStorage.setItem(

        "lesson_" + id,

        "done"

    );

    updateProgress();

}

function updateProgress() {

    let total = 30;

    let done = 0;

    for (let i = 1; i <= total; i++) {

        if (localStorage.getItem("lesson_" + i) === "done") {

            done++;

        }

    }

    let percent = Math.round(done / total * 100);

    console.log("Tiến độ:", percent + "%");

}

/*==============================
 Điểm
==============================*/

function setScore(score) {

    localStorage.setItem(

        "score",

        score

    );

}

function getScore() {

    return Number(

        localStorage.getItem("score") || 0

    );

}

function addScore(point) {

    let score = getScore();

    score += point;

    setScore(score);

}

/*==============================
 XP
==============================*/

function addXP(point) {

    let xp = Number(

        localStorage.getItem("xp") || 0

    );

    xp += point;

    localStorage.setItem("xp", xp);

}

function getXP() {

    return Number(

        localStorage.getItem("xp") || 0

    );

}

/*==============================
 Từ yêu thích
==============================*/

let favorites = [];

function loadFavorites() {

    let data = localStorage.getItem("favorites");

    if (data) {

        favorites = JSON.parse(data);

    }

}

function saveFavorites() {

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );

}

function addFavorite(word) {

    if (!favorites.includes(word)) {

        favorites.push(word);

        saveFavorites();

        alert("❤️ Đã lưu");

    }

}

function removeFavorite(word) {

    favorites = favorites.filter(item => item !== word);

    saveFavorites();

}

/*==============================
 Phát âm
==============================*/

function speak(text) {

    speechSynthesis.cancel();

    let speech = new SpeechSynthesisUtterance(text);

    speech.lang = "vi-VN";

    speech.rate = 0.8;

    speech.pitch = 1;

    speech.volume = 1;

    speechSynthesis.speak(speech);

}

/*==============================
 Thông báo
==============================*/

function showMessage(message) {

    alert(message);

}

/*==============================
 Reset dữ liệu
==============================*/

function resetApp() {

    if (confirm("Bạn có chắc muốn xóa toàn bộ dữ liệu?")) {

        localStorage.clear();

        location.reload();

    }

}

/*==============================
 PWA
==============================*/

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker

            .register("service-worker.js")

            .then(() => {

                console.log("Service Worker Ready");

            })

            .catch(err => {

                console.log(err);

            });

    });

}

/*==============================
 Thông tin
==============================*/

console.log("--------------------------------");

console.log(APP.name);

console.log("Version:", APP.version);

console.log("--------------------------------");

// Đăng ký Service Worker

if("serviceWorker" in navigator){

window.addEventListener("load",()=>{

navigator.serviceWorker.register("service-worker.js")

.then(()=>{

console.log("Service Worker đã đăng ký");

})

.catch(error=>{

console.log(error);

});

});

}