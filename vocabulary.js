let words = [];
// 双语元素
const langBtn = document.getElementById("langBtn");
const subTitle = document.querySelector(".subtitle");
const searchInput = document.getElementById("search");
const txtHome = document.getElementById("txtHome");

function updateLangText(){
    const lang = window.getLang();
    const t = window.LANG[lang];
    lang.innerText = lang==="vi"?"中文":"Tiếng Việt";
    subTitle.innerText = lang==="vi"?"Danh sách từ vựng":"词汇列表";
    searchInput.placeholder = t.search;
    txtHome.innerText = t.home;
}
function switchLang(){
    const l = window.getLang();
    window.setLang(l==="vi"?"cn":"vi");
}

document.addEventListener("DOMContentLoaded", function(){
    updateLangText();
    if (typeof window.VOCABULARY === "undefined") {
        alert(window.LANG[window.getLang()].dataErr);
        renderVocabulary([]);
        return;
    }
    words = [...window.VOCABULARY];
    renderVocabulary();
});

function renderVocabulary(list = words) {
    const t = window.LANG[window.getLang()];
    let html = "";
    if (list.length === 0) {
        html = `<div class="word"><h2>${t.noWord}</h2></div>`;
    } else {
        list.forEach(word => {
            // 在线实景图片seed用词汇id，固定真实照片
            let imgUrl = `https://picsum.photos/seed/${word.id}/900/400`;
            html += `
            <div class="word">
                <div class="word-img">
                    <img src="${imgUrl}" alt="${word.vn}">
                </div>
                <h2>${word.vn}</h2>
                <p><strong>${t.cn}：</strong> ${word.cn}</p>
                <p><strong>Pinyin：</strong> ${word.pinyin}</p>
                <p><strong>${t.search}：</strong> ${word.exampleVN}</p>
                <p>${word.exampleCN}</p>
                <div class="action">
                    <button class="speak" onclick="readWord('${word.vn}')">🔊 ${t.listen}</button>
                    <button onclick="saveWord('${word.vn}')">❤️ ${t.save}</button>
                    <button class="flip" onclick="openFlashcard(${word.lesson})">🎴 ${t.flashcard}</button>
                </div>
            </div>
            `;
        });
    }
    document.getElementById("list").innerHTML = html;
}
function readWord(text){
    window.readVoice(text);
}
function searchWord() {
    const kw = document.getElementById("search").value.trim().toLowerCase();
    const res = words.filter(w=>
        w.vn.toLowerCase().includes(kw) ||
        w.cn.includes(kw) ||
        w.pinyin.toLowerCase().includes(kw)
    );
    renderVocabulary(res);
}
function saveWord(text) {
    let fav = [];
    try{
        let raw = localStorage.getItem("favorites");
        if(raw) fav = JSON.parse(raw);
    }catch(e){localStorage.removeItem("favorites");}
    if(!fav.includes(text)){
        fav.push(text);
        localStorage.setItem("favorites",JSON.stringify(fav));
        alert("❤️ "+text);
    }else{
        alert(window.getLang()==="vi"?"Đã lưu rồi":"已收藏");
    }
}
function openFlashcard(lesson) {
    window.location.href = "flashcard.html?id="+lesson;
}
