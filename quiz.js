/*=================================
 VietMiniApp
 Quiz
=================================*/

let score = 0;

let current;

function randomQuestion(){

    current = VOCABULARY[
        Math.floor(Math.random()*VOCABULARY.length)
    ];

    document.getElementById("question").innerHTML =
    current.vn;

    let options = [];

    options.push(current.cn);

    while(options.length<4){

        let w = VOCABULARY[
        Math.floor(Math.random()*VOCABULARY.length)
        ];

        if(!options.includes(w.cn)){

            options.push(w.cn);

        }

    }

    options.sort(()=>Math.random()-0.5);

    let html="";

    options.forEach(option=>{

        html+=`

<button
style="width:100%;margin:10px 0;padding:15px"
onclick="checkAnswer('${option}')">

${option}

</button>

`;

    });

    document.getElementById("answers").innerHTML=html;

}

function checkAnswer(answer){

    if(answer==current.cn){

        alert("✅ Chính xác");

        score++;

        localStorage.setItem("score",score);

    }else{

        alert("❌ Sai\nĐáp án đúng: "+current.cn);

    }

    document.getElementById("score").innerHTML=score;

    randomQuestion();

}

randomQuestion();