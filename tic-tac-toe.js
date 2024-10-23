let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");
let u1 = true;
let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame=()=>{
    u1=true;
    unablebox();
    message.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (u1) {
            box.innerText = "X";
            u1 = false;
        }
        else {
            box.innerText = "O";
            u1 = true;
        }
        box.disabled = true;
        winner();
    });
    
});
const disablebox = () => {
    for(let box of boxes){
        box.disabled=true;
    }
};
const unablebox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showwinner = (winner) => {
    msg.innerText = `Congratulations!,winner is ${winner}`;
    message.classList.remove("hide");
    disablebox();
};
let count=0;
const winner = () => {
    for (let value of arr) {
        let pos1 = boxes[value[0]].innerText;
        let pos2 = boxes[value[1]].innerText;
        let pos3 = boxes[value[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showwinner(pos1);
                count=0;
            }
        }
       
    }
    count++;
    if(count>=9){
        msg.innerText="Game is over";
        message.classList.remove("hide");
        console.log(count);
        count=0;
    }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);