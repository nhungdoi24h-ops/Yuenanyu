// 全局状态变量
let currentLessonId = 2;
let currVocList = [];
let flashIndex = 0;

// ========== 1. 顶部导航切换功能 ==========
document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.onclick = ()=>{
        document.querySelectorAll(".module").forEach(m=>m.classList.remove("show"));
        document.getElementById(btn.dataset.target).classList.add("show");
        document.querySelectorAll(".nav-btn").forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
    }
})

// ========== 2. 课程列表渲染函数 ==========
function renderLessonList(){
    const box = document.getElementById("lessonBox");
    box.innerHTML = "";
    LESSONS.forEach(les=>{
        const div = document.createElement("div");
        div.className = "lesson-item " + (les.id === currentLessonId ? "active" : "");
        div.innerHTML = `<b>Bài ${les.id}：${les.title}</b><br><span class="tip">${les.description}</span>`;
        div.onclick = ()=>{
            currentLessonId = les.id;
            renderLessonList();
            loadCurrLessonData();
        }
        box.appendChild(div);
    })
}

// ========== 3. 加载当前课程全部数据（词汇/对话/语法） ==========
function loadCurrLessonData(){
    currVocList = VOCABULARY.filter(v=>v.lesson === currentLessonId);
    document.getElementById("currLessonName").innerText = LESSONS.find(l=>l).title;
    renderVocLib();
    resetFlashCard();
    renderDialogue();
    renderGrammar();
}

// ========== 4. 词汇库渲染模块 ==========
function renderVocLib(){
    const box = document.getElementById("vocBox");
    if(!currVocList.length){box.innerHTML = "<div class='tip'>本课暂无词汇</div>";return;}
    let html = `<table class="voc-table">
    <tr><th>配图</th><th>Tiếng Việt</th><th>中文</th><th>发音</th><th>例句</th></tr>`;
    currVocList.forEach(v=>{
        html += `<tr>
        <td><img width="80" src="img/lesson${v.lesson}/${v.id}.png"></td>
        <td>${v.vn}</td>
        <td>${v.cn}</td>
        <td><button class="audio-btn" onclick="playWord('${v.vn}')">▶</button></td>
        <td>${v.exampleVN}<br><span class="cn-text">${v.exampleCN}</span></td>
        </tr>`;
    })
    html += `</table>`;
    box.innerHTML = html;
}

// ========== 5. 闪卡复习全套逻辑 ==========
function resetFlashCard(){
    flashIndex = 0;
    renderFlash();
}
function renderFlash(){
    if(!currVocList.length) return;
    const v = currVocList[flashIndex];
    document.getElementById("flashVN").innerText = v.vn;
    document.getElementById("flashCN").innerText = v.cn;
    document.getElementById("flashEx").innerText = v.exampleVN + " | " + v.exampleCN;
    document.getElementById("flashImg").src = `img/lesson${v.lesson}/${v.id}.png`;
    document.getElementById("cardIndex").innerText = `${flashIndex+1} / ${currVocList.length}`;
    document.getElementById("flipWrap").classList.remove("flip");
}
// 卡片点击翻转
document.getElementById("flipWrap").onclick = ()=>{
    document.getElementById("flipWrap").classList.toggle("flip");
}
// 上一张、下一张按钮
document.getElementById("nextCard").onclick = ()=>{
    flashIndex = (flashIndex + 1) % currVocList.length; renderFlash();
}
document.getElementById("prevCard").onclick = ()=>{
    flashIndex = (flashIndex -1 + currVocList.length) % currVocList.length; renderFlash();
}
// 闪卡发音按钮
document.getElementById("flashAudio").onclick = (e)=>{
    e.stopPropagation();
    playWord(currVocList[flashIndex].vn);
}

// ========== 6. 发音朗读通用函数（越南语TTS） ==========
function playWord(text){
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "vi-VN";
    speechSynthesis.speak(utter);
}

// ========== 7. 对话渲染模块 ==========
function renderDialogue(){
    const box = document.getElementById("dialogBox");
    const imgBox = document.getElementById("dialogImgBox");
    box.innerHTML = ""; imgBox.innerHTML = "";
    const dial = DIALOGUES.find(d=>d.lesson === currentLessonId);
    if(!dial){box.innerHTML = "<div class='tip'>本课无对话</div>";return;}
    imgBox.innerHTML = `<img class="dialog-img" src="img/dialog${dial.lesson}.jpg">`;
    dial.dialogues.forEach(d=>{
        box.innerHTML += `<h4>${d.titleVN} / ${d.titleCN}</h4>`;
        d.conversation.forEach(item=>{
            box.innerHTML += `
            <div class="dialog-item">
                <div class="speaker">${item.speaker}</div>
                <p class="vn-text">${item.vn} <button class="audio-btn btn-sm" onclick="playWord('${item.vn}')">▶</button></p>
                <p class="cn-text">${item.cn}</p>
            </div>`;
        })
    })
}

// ========== 8. 语法渲染模块 ==========
function renderGrammar(){
    const box = document.getElementById("grammarBox");
    box.innerHTML = "";
    const gram = GRAMMAR.find(g=>g.lesson === currentLessonId);
    if(!gram){box.innerHTML = "<div class='tip'>本课无语法内容</div>";return;}
    gram.grammar.forEach(g=>{
        box.innerHTML += `
        <div class="grammar-pattern">
            <h4>${g.titleVN}（${g.titleCN}）</h4>
            <p><b>句型：</b>${g.pattern}</p>
            <p>${g.explanationVN}<br><span class="cn-text">${g.explanationCN}</span></p>
            <p><b>例句：</b></p>`;
        g.examples.forEach(ex=>{
            box.innerHTML += `<p>• ${ex.vn} <span class="cn-text">${ex.cn}</span></p>`;
        })
        box.innerHTML += `</div>`;
    })
}

// ========== 9. 习题生成与判题模块 ==========
document.getElementById("genExercise").onclick = ()=>{
    const exBox = document.getElementById("exBox");
    exBox.innerHTML = "";
    if(currVocList.length < 3){exBox.innerHTML = "<div class='tip'>词汇不足，无法出题</div>";return;}
    // 随机打乱，抽取15题
    let pool = [...currVocList].sort(()=>Math.random());
    let qList = pool.slice(0,15);
    qList.forEach((v,idx)=>{
        const types = ["choice","trans","pic"];
        const t = types[Math.floor(Math.random()*3)];
        let qHtml = `<div class="question"><b>Câu ${idx+1}：</b>`;
        // 单选题型
        if(t === "choice"){
            let wrong = currVocList.filter(x=>x.id!==v.id).sort(()=>Math.random()).slice(0,3);
            let opts = [v,...wrong].sort(()=>Math.random());
            qHtml += `Từ "${v.vn}" nghĩa là gì?`;
            opts.forEach(opt=>{
                qHtml += `<div class="opt" data-ans="${opt.cn === v.cn ? 1 :0}" onclick="checkAns(this)">${opt.cn}</div>`;
            })
        }
        // 翻译填空
        else if(t === "trans"){
            qHtml += `Dịch: ${v.cn}<br><input style="width:80%;padding:6px;" data-ans="${v.vn}" onblur="checkInput(this)">`;
        }
        // 看图填词
        else{
            qHtml += `<img width="120" src="img/lesson${v.lesson}/${v.id}.png"><br>Viết từ: <input data-ans="${v.vn}" onblur="checkInput(this)">`;
        }
        qHtml += `</div>`;
        exBox.innerHTML += qHtml;
    })
}
// 选择题判分
function checkAns(el){
    const allOpt = el.parentElement.querySelectorAll(".opt");
    allOpt.forEach(o=>o.classList.remove("correct","wrong"));
    el.dataset.ans == 1 ? el.classList.add("correct") : el.classList.add("wrong");
}
// 输入框判分
function checkInput(input){
    input.value.trim() === input.dataset.ans 
    ? input.style.border = "2px solid #30b050" 
    : input.style.border = "2px solid #f06666";
}

// ========== 页面初始化入口 ==========
window.onload = ()=>{
    renderLessonList();
    loadCurrLessonData();
}