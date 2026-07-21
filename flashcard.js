let lessonId = 1;
let lesson = null;
let words = [];
let currentIndex = 0;
let showFront = true;

const flipWrap = document.getElementById("flipWrap");
const frontImg = document.getElementById("frontImg");
const backImg = document.getElementById("backImg");
const vn = document.getElementById("vn");
const vnBack = document.getElementById("vnBack");
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

// 更新页面所有双语文字
function updateLangText(){
    const langKey = window.getLang();
    const t = window.LANG[langKey];
    langBtn.innerText = langKey==="vi"?"中文":"Tiếng Việt";
    txtListen.innerText = t.listen;
    txtFlip.innerText = t.flip;
    txtPrev.innerText = t.prev;
    txtNext.innerText = t.next;
    txtBackLesson.innerText = t.backLesson;
    txtHome.innerText = t.home;
}
// 切换语言
function switchLang(){
    const now = window.getLang();
    window.set(now==="vi"?"cn":"vi");
}

document.addEventListener("DOMContentLoaded",function(){
    updateLangText();
    if (typeof window.LESSONS === "undefined" || typeof window.VOCABULARY === "undefined") {
        alert(window.LANG[window.getLang()].dataErr);
        return;
    }
    const params = new URLSearchParams(window.location.search);
    let rawId = params.get("id");
    let tempId = parseInt(rawId);
    if (!isNaN(tempId) && tempId >=1 && tempId <= window.LESSONS.length) {
        lessonId = tempId;
    }
    lesson = window.LESSONS.find(l => l.id === lessonId);
    words = window.VOCABULARY.filter(v => v.lesson === lessonId);
    initFlashcard();
});

function initFlashcard(){
    if(!lesson){
        lessonTitle.innerHTML=lesson.title;
        return;
    }
    lessonTitle.innerHTML = lesson.title;
    lessonInfo.innerHTML = `Bài ${lessonId} • ${words.length} từ`;
    if(words.length===0){
        frontImg.innerHTML = "";
        vn.innerHTML="Không có dữ liệu";
        return;
    }
    renderCard();
}
function renderCard(){
    const item = words[currentIndex];
    const imgSrc = `https://picsum.photos/seed/${item.id}/850/380`;
    frontImg.innerHTML = `<img src="${imgSrc}" alt="${item.vn}">`;
    backImg.innerHTML = `<img src="${imgSrc}" alt="${item.vn}">`;
    vn.innerText = item.vn;
    vnBack.innerText = item.vn;
    cn.innerText = item.cn;
    pinyin.innerText = item.pinyin;
    example.innerHTML = `🇻🇳 ${item.exampleVN}<br><br>🇨🇳 ${item.exampleCN}`;
    updateProgress();
}
function updateProgress(){
    const per = ((currentIndex+1)/words.length)*100;
    progressBar.style.width = per+"%";
    lessonInfo.innerHTML = `Từ ${currentIndex+1}/${words.length}`;
}
function flipCard(){
    showFront = !showFront;
    flipWrap.classList.toggle("flip-active");
}
function nextWord(){
    if(currentIndex < words.length-1){
        currentIndex++;
        showFront=true;
        flipWrap.classList.remove("flip-active");
        renderCard();
    }
}
function previousWord(){
    if(currentIndex>0){
        currentIndex--;
        showFront=true;
        flipWrap.classList.remove("flip-active");
        renderCard();
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
    if(e.key==="ArrowRight") nextWord();
    if(e.key==="ArrowLeft") previousWord();
    if(e.key===" "||e.key==="Enter"){e.preventDefault();flipCard();}
});
