let words = [];
// 双语DOM元素
const langBtn = document.getElementById("langBtn");
const subTitle = document.querySelector(".subtitle");
const searchInput = document.getElementById("search");
const txtHome = document.getElementById("txtHome");

// 更新页面双语文字
function updateLangText(){
    const lang = window.getLang();
    const t = window.LANG[lang];
    langBtn.innerText = lang === "vi" ? "中文" : "Tiếng Việt";
    subTitle.innerText = lang === "vi" ? "Danh sách từ vựng" : "词汇列表";
    searchInput.placeholder = t.search;
    txtHome.innerText = t.home;
}
function switchLang(){
    const l = window.getLang();
    window.setLang(l === "vi" ? "cn" : "vi");
}

document.addEventListener("DOMContentLoaded", function(){
    updateLangText();
    // 校验全局数据
    if(typeof window.VOCABULARY === "undefined"){
        window.showToast(window.LANG[window.getLang()].dataErr,"error");
        document.getElementById("list").innerHTML = `<div class="empty-state">${window.LANG[window.getLang()].dataErr}</div>`;
        return;
    }
    // 展示骨架加载
    document.getElementById("list").innerHTML = window.renderSkeleton(8);
    // 模拟短延迟加载真实数据
    setTimeout(()=>{
        words = [...window.VOCABULARY];
        renderVocabulary();
    },400);
});

// 渲染词汇卡片（带实景图）
function renderVocabulary(list = words) {
    const t = window.LANG[window.getLang()];
    let html = "";
    if(list.length === 0){
        html = `<div class="empty-state">${t.noWord}</div>`;
    }else{
        list.forEach(word => {
            const imgUrl = window.getWordImage(word.id);
            html += `
            <div class="word">
                <div class="word-img">
                    <img src="${imgUrl}" alt="${word.vn}" loading="lazy">
                </div>
                <h2 class="wordVN">${word.vn}</h2>
                <p><strong>${t.vocab}：</strong>${word.cn}</p>
                <p class="wordPY">Pinyin：${word.pinyin}</p>
                <div class="example">
                    <p><strong>${t.search}：</strong>${word.exampleVN}</p>
                    <p>${word.exampleCN}</p>
                </div>
                <div class="button-group">
                    <button class="speak" onclick="readWord('${word.vn}')">🔊 ${t.listen}</button>
                    <button onclick="saveWord('${word.vn}')">❤️ ${t.save}</button>
                    <button class="flip" onclick="openFlashcard(${word.lesson})">🎴 ${t.flip}</button>
                </div>
            </div>`;
        });
    }
    document.getElementById("list").innerHTML = html;
}
// 朗读单词
function readWord(text){
    window.readVoice(text);
}
// 搜索过滤
function searchWord() {
    const kw = document.getElementById("search").value.trim().toLowerCase();
    const res = words.filter(w=>
        w.vn.toLowerCase().includes(kw) ||
        w.cn.includes(kw) ||
        w.pinyin.toLowerCase().includes(kw)
    );
    renderVocabulary(res);
}
// 收藏单词
function saveWord(text) {
    let fav = [];
    try{
        const raw = localStorage.getItem("favorites");
        if(raw) fav = JSON.parse(raw);
    }catch(e){
        localStorage.removeItem("favorites");
    }
    if(!favorites.includes(text)){
        fav.push(text);
        localStorage.setItem("favorites",JSON.stringify(fav));
        window.showToast("❤️ " + text, "success");
    }else{
        window.showToast(window.getLang()==="vi"?"Đã lưu rồi":"已收藏","warn");
    }
}
// 跳转闪卡
function openFlashcard(lesson) {
    window.location.href = "flashcard.html?id="+lesson;
}
