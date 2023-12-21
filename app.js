let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newBtn=document.querySelector(".new-btn");
let windiv=document.querySelector(".wins");
let message=document.querySelector(".msg");
let turnO =true; // player x

let winningpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetgame=()=>{
    turnO=true;
    enabledbtns();
    windiv.classList.add("wins");
}

const enabledbtns=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#fff";
    }
}

const disabledbtns=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

let showwinner=(winner)=>{
    message.innerText=`Congratulations,Winner is ${winner}`;
    windiv.classList.remove("wins");
}


let Winner=()=>{
    for(let pattern of winningpatterns){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;
        if(val1 != "" && val2 !="" && val3 !=""){
            if(val1===val2 && val2=== val3){
                showwinner(val1);
                disabledbtns();
            }
        }
    }
};




boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="X";
            box.style.backgroundColor="#ffffc2";
            turnO=false;
        }
        else{
            box.innerText="O";
            box.style.backgroundColor="#ffffc2";
            turnO=true;
        }
        box.disabled=true;
        Winner();
    }) 
});


resetbtn.addEventListener("click",resetgame);
