/*=========================================
 VietMiniApp
 vocabulary.js
 Version 2.0
=========================================*/

let words = [...VOCABULARY];

// Hiển thị danh sách từ
function renderVocabulary(list = words) {

    let html = "";

    if (list.length === 0) {

        html = `
        <div class="word">
            <h2>Không tìm thấy từ vựng.</h2>
        </div>
        `;

    } else {

        list.forEach(word => {

            html += `

            <div class="word">

                <h2>${word.vn}</h2>

                <p><strong>Tiếng Trung:</strong> ${word.cn}</p>

                <p><strong>Pinyin:</strong> ${word.pinyin}</p>

                <p><strong>Ví dụ:</strong> ${word.exampleVN}</p>

                <p>${word.exampleCN}</p>

                <div class="action">

                    <button onclick="speakWord('${word.vn}')">

                        🔊 Nghe

                    </button>

                    <button onclick="saveWord('${word.vn}')">

                        ❤️ Lưu

                    </button>

                    <button onclick="openFlashcard(${word.lesson})">

                        🎴 Flashcard

                    </button>

                </div>

            </div>

            `;

        });

    }

    document.getElementById("list").innerHTML = html;

}

// Tìm kiếm
function searchWord() {

    const keyword = document
        .getElementById("search")
        .value
        .trim()
        .toLowerCase();

    const result = words.filter(word =>

        word.vn.toLowerCase().includes(keyword) ||

        word.cn.includes(keyword) ||

        word.pinyin.toLowerCase().includes(keyword)

    );

    renderVocabulary(result);

}

// Phát âm
function speakWord(text) {

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(text);

    speech.lang = "vi-VN";
    speech.rate = 0.8;
    speech.pitch = 1;

    speechSynthesis.speak(speech);

}

// Lưu từ yêu thích
function saveWord(text) {

    let favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

    if (!favorites.includes(text)) {

        favorites.push(text);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("❤️ Đã lưu: " + text);

    } else {

        alert("Từ này đã có trong danh sách.");

    }

}

// Mở Flashcard
function openFlashcard(lesson) {

    window.location.href =
        "flashcard.html?id=" + lesson;

}

// Khởi động
renderVocabulary();