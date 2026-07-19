const params=new URLSearchParams(window.location.search);

const lessonID=Number(params.get("id"))||1;

const lesson = LESSONS.find(
x=>x.id==lessonID
);

document.getElementById("lessonTitle").innerHTML=lesson.title;

let html="";

VOCABULARY
.filter(x=>x.lesson===lessonID)
.forEach(word=>{

html+=`

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

${word.exampleVN}

<br>

${word.exampleCN}

</div>

<div class="buttonGroup">

<button onclick="speak('${word.vn}')">

🔊 Phát âm

</button>

<button onclick="addFavorite('${word.vn}')">

❤️ Lưu

</button>

</div>

</div>

`;

});

document.getElementById("lessonContent").innerHTML=html;

saveCurrentLesson(

"lesson.html?id="+lessonID

);

function nextLesson(){

location.href="lesson.html?id="+(lessonID+1);

}
