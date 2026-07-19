/*=========================================
 VietMiniApp
 flashcard.js
 Phiên bản 2.0
=========================================*/

let currentIndex = 0;

// Lấy id bài học trên URL
const params = new URLSearchParams(window.location.search);
const lessonID = Number(params.get("id")) || 2;

// Chỉ lấy từ của bài học hiện tại
let words = VOCABULARY.filter(item => item.lesson === lessonID);

// Nếu chưa có dữ liệu thì dùng toàn bộ
if(words.length === 0){
    words = VOCABULARY;
}

// Hiển thị từ
function showWord(){

    const word = words[currentIndex];

    document.getElementById("front").innerHTML = `
        <div>
            <h2>${word.vn}</h2>
        </div>
    `;

    document.getElementById("back").innerHTML = `
        <div>
            <h2>${word.cn}</h2>
            <br>
            <p>${word.pinyin}</p>
            <br>
            <small>${word.exampleVN}</small>
        </div>
    `;

    document.getElementById("flash").classList.remove("flip");

}

// Lật thẻ
function flipCard(){

    document
        .getElementById("flash")
        .classList.toggle("flip");

}

// Từ tiếp
function nextWord(){

    currentIndex++;

    if(currentIndex >= words.length){

        currentIndex = 0;

    }

    showWord();

}

// Từ trước
function previousWord(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = words.length - 1;

    }

    showWord();

}

// Phát âm
function speakWord(){

    const word = words[currentIndex];

    speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(word.vn);

    speech.lang = "vi-VN";

    speech.rate = 0.8;

    speech.pitch = 1;

    speechSynthesis.speak(speech);

}

// Lưu yêu thích
function saveWord(){

    const word = words[currentIndex].vn;

    let favorites = JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

    if(!favorites.includes(word)){

        favorites.push(word);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("❤️ Đã lưu từ");

    }else{

        alert("Từ đã có trong danh sách.");

    }

}

// Khởi động
showWord();