let lessonId = 1;
let lesson = null;
let words = [];
let currentIndex = 0;
let showFront = true;
let isSpeaking = false; // 语音锁，防止重复疯狂朗读

// DOM元素
const flipWrap = document.getElementById("flipWrap");
const cardBox = document.getElementById("cardBox");
const frontImg = document.getElementById("frontImg");
const backImg = document.getElementById("vnBack");
const vn = document.getElementById("vn");
const cn = document.getElementById("cn");
const pinyin = document.getElementById("pinyin");
const example = document.getElementById("example");
const lessonTitle = document.getElementById("lessonTitle");
const lessonInfo = document.getElementById("lessonInfo");
const progressBar = document.getElementById("progressBar");
// 双语DOM
const langBtn = document.getElementById("langBtn");
const txtListen = document.getElementById("txtListen");
const txtFlip = document.getElementById("txtFlip");
const txtPrev = document.getElementById("txtPrev");
const txtNext = document.getElementById("txtNext");
const txtBackLesson = document.getElementById("txtBackLesson");
const txtHome = document.getElementById("txtHome");

// 更新双语文字
function updateLangText(){
    const langKey = window.getLang();
    const t = window.LANG[langKey];
    langBtn.innerText = langKey === "vi" ? "中文" : "Tiếng Việt";
    txtListen.innerText = t.listen;
    txtFlip.innerText = t.flip;
    txtPrev.innerText = t.prev;
    txtNext.innerText = t.next;
    txtBackLesson.innerText = t.backLesson;
    txtHome.innerText = t.home;
}
function switchLang(){
    const now = window.getLang();
    window.setLang(now === "vi" ? "cn" : "vi");
}

// 悬浮进入卡片 → 朗读单词
cardBox.addEventListener("mouseenter", function(){
    const wordText = vn.innerText.trim();
    if(wordText && !isSpeaking){
        isSpeaking = true;
        window.readVoice(wordText);
        // 语音结束解锁
        setTimeout(()=>{
            isSpeaking = false;
        }, 2200);
    }
});
// 鼠标离开停止朗读
cardBox.addEventListener("mouseleave", function(){
    window.speechSynthesis.cancel();
    isSpeaking = false;
});
// 移动端触摸卡片：翻转+发音
cardBox.addEventListener("touchstart", function(e){
    e.preventDefault();
    flipCard();
    const wordText = vn.innerText.trim();
    if(wordText && !isSpeaking){
        isSpeaking = true;
        window.readVoice(wordText);
        setTimeout(()=>{
            isSpeaking = false;
        }, 2200);
    }
});

document.addEventListener("DOMContentLoaded",function(){
    updateLangText();
    if(window.LESSONS === undefined || window.VOCABULARY === undefined){
        window.showToast(window.LANG[window.getLang()].dataErr,"error");
        return;
    }
    const params = new URLSearchParams(window.location.search);
    let tempId = parseInt(params.get("id"));
    if (!isNaN(tempId) && tempId >= 1 && tempId <= window.LESSONS.length) {
        lessonId = tempId;
    }
    lesson = window.LESSONS.find(l => l.id === lessonId);
    words = window.VOCABULARY.filter(v => v.lessonId === lessonId);
    initFlashcard();
});

function initFlashcard(){
    if(!lesson){
        lessonTitle.innerHTML = lesson.title;
        return;
    }
    lessonTitle.innerHTML = lesson.title;
    lessonInfo.innerHTML = `Bài ${lessonId} • ${words.length} từ`;
    if(words.length === 0){
        vn.innerHTML = window.LANG[window.getLang()].noWord;
        return;
    }
    renderCard();
}
function renderCard(){
    const item = words[currentIndex];
    const imgSrc = window.getWordImage(item.id);
    frontImg.innerHTML = `<img src="${imgSrc}" alt="${item.vn}" loading="lazy">`;
    backImg.innerHTML = `<img src="${imgSrc}" alt="${item.vn}" loading="lazy">`;
    vn.innerText = item.vn;
    vnBack.innerText = item.vn;
    cn.innerText = item.cn;
    pinyin.innerText = item.pinyin;
    example.innerHTML = `🇻🇳 ${item.exampleVN}<br><br>🇨🇳 ${item.exampleCN}`;
    updateProgress();
}
function updateProgress(){
    const per = ((currentIndex+1)/words.length)*100;
    progressBar.style.width = per + "%";
    lessonInfo.innerHTML = `Từ ${currentIndex}/${words.length}`;
}
// 手动翻转按钮
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
        // 切换新词自动朗读
        const wordText = vn.innerText.trim();
        setTimeout(()=>{
            window.readVoice(wordText);
        }, 300);
    }else{
        window.showToast(window.LANG[window.getLang()].perfect,"success");
    }
}
function previousWord(){
    if(currentIndex > 0){
        currentIndex--;
        showFront = true;
        flipWrap.classList.remove("flip-active");
        renderCard();
        setTimeout(()=>{
            window.readVoice(vn.innerText.trim());
        },300);
    }
}
function backLesson(){
    location.href = "lesson.html?id="+lessonId;
}
function goHome(){
    location.href = "index.html";
}
// 键盘快捷键
document.addEventListener("keydown",e=>{
    if(e.key === "ArrowRight") nextWord();
    if(e.key === "ArrowLeft") previousWord();
    if(e.key === " " || e.key === "Enter"){
        e.preventDefault();
        flipCard();
        window.readVoice(vn.innerText.trim());
    }
});
