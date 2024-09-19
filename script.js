var Timer = 60;
var Score = 0;
var hitrn;


function MakeBubble(){
    var bubble = '<div class="bubble">bbb</div>'
    var container = ""
    for(var i=1;i<=160; ++i){
        container += bubble.replace('bbb', Math.floor(Math.random()*10))
    }
    document.querySelector(".pbtm").innerHTML = container;
    
}

function RunTimer(){
    var timerint = setInterval(function(){
        if(Timer > 0){
            Timer --;
        }
        else{
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over</h1>`
            clearInterval(timerint);
        }
        document.querySelector(".timerval").textContent = Timer;
    },1000)
}

function GetNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector(".hitval").textContent = hitrn;  
}

function IncreaseScore(){
    Score += 10;
    document.querySelector(".scoreval").textContent = Score;
}

document.querySelector(".pbtm").addEventListener("click",function(details){
    var bubnum= Number(details.target.textContent);
    if(hitrn == bubnum){
        IncreaseScore();
        GetNewHit();
        MakeBubble();
    }
})

MakeBubble();
RunTimer();
GetNewHit();


// for (let i = 0; i < 400; i++) {
//     const hitvalElement = document.querySelector('.hitval');
//     const number = hitvalElement.textContent.trim();
//     const bubbleElements = document.querySelectorAll('.bubble');
//     for (const bubbleElement of bubbleElements) {
//         if (bubbleElement.textContent.trim() === number) {
//             const rect = bubbleElement.getBoundingClientRect();
//             const centerX = rect.left + rect.width / 2;
//             const centerY = rect.top + rect.height / 2;
//             bubbleElement.dispatchEvent(new MouseEvent('click', {
//                 bubbles: true,
//                 cancelable: true,
//                 clientX: centerX,
//                 clientY: centerY,
//             }));
//             break; 
//         }
//     }
// }