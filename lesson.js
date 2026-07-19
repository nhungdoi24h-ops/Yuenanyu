/*=========================================
 VietMiniApp
 lesson.js
 Phiên bản 2.0
=========================================*/

// Lấy id bài học từ URL
const params = new URLSearchParams(window.location.search);
const lessonID = Number(params.get("id")) || 1;

// Tìm bài học
const lesson = LESSONS.find(item => item.id === lessonID);

// Kiểm tra bài học có tồn tại không
if (!lesson) {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50px;'>Không tìm thấy bài học.</h2>";
    throw new Error("Lesson not found");
}

// Hiển thị tiêu đề
const titleElement = document.getElementById("lessonTitle");
if (titleElement) {
    titleElement.textContent = lesson.title;
}

// Lấy khu vực hiển thị nội dung
const content = document.getElementById("lessonContent");

// Lấy danh sách từ của bài học
const words = VOCABULARY.filter(item => item.lesson === lessonID);

// Không có dữ liệu
if (words.length === 0) {

    content.innerHTML = `
        <div class="wordCard">
            <h2>Bài học đang được cập nhật.</h2>
            <p>Hãy quay lại sau.</p>
        </div>
    `;

} else {

    let html = "";

    words.forEach(word => {

        html += `

        <div class="wordCard">

            <div class="wordVN">
                ${word.vn}
            </div>

            <div class="wordCN">
                ${word.cn}
            </div>

            <div class="wordPY">
                ${word.pinyin}
            </div>

            <div class="example">

                <b>Ví dụ</b>

                <br><br>

                🇻🇳 ${word.exampleVN}

                <br><br>

                🇨🇳 ${word.exampleCN}

            </div>

            <div class="buttonGroup">

                <button onclick="playVoice('${word.vn}')">
                    🔊 Phát âm
                </button>

                <button onclick="saveFavorite('${word.vn}')">
                    ❤️ Lưu
                </button>

            </div>

        </div>

        `;

    });

    content.innerHTML = html;

}

// Lưu bài đang học
localStorage.setItem(
    "currentLesson",
    "lesson.html?id=" + lessonID
);

// Phát âm
function playVoice(text) {

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "vi-VN";

    speech.rate = 0.8;

    speech.pitch = 1;

    speech.volume = 1;

    speechSynthesis.speak(speech);

}

// Lưu yêu thích
function saveFavorite(word) {

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favorites.includes(word)) {

        favorites.push(word);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("❤️ Đã lưu: " + word);

    } else {

        alert("Từ này đã có trong danh sách.");

    }

}

// Hoàn thành bài học
function completeLesson() {

    localStorage.setItem(
        "lesson_" + lessonID,
        "done"
    );

    let score = Number(localStorage.getItem("score")) || 0;
    score += 10;
    localStorage.setItem("score", score);

    let xp = Number(localStorage.getItem("xp")) || 0;
    xp += 5;
    localStorage.setItem("xp", xp);

    alert("🎉 Chúc mừng! Bạn đã hoàn thành bài học.");

}

// Bài tiếp theo
function nextLesson() {

    const next = LESSONS.find(item => item.id === lessonID + 1);

    if (next) {

        window.location.href = "lesson.html?id=" + next.id;

    } else {

        alert("🎉 Bạn đã hoàn thành tất cả bài học hiện có.");

        window.location.href = "course.html";

    }

}