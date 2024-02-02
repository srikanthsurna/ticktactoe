let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let msg=document.querySelector("#msg");
let msgcon=document.querySelector(".msg-container");
let newgame=document.querySelector("#new-btn");
let turn=true;
const wp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
newgame.addEventListener("click",()=>{
    location.reload();
});
function checker(){
    for(let p of wp){
        let ps0=boxes[p[0]].innerText;
        let ps1=boxes[p[1]].innerText;
        let ps2=boxes[p[2]].innerText;
        if(ps1=="X" && ps1==ps2 && ps0==ps1){
            msg.innerText='winner is X';
            msgcon.classList.remove("hide");
            boxes.forEach((box)=>{
                     box.disabled=true;
                });


        }
        if(ps1=="O" && ps1==ps2 && ps0==ps1){
            msg.innerText='winner is O';
            msgcon.classList.remove('hide');
            boxes.forEach((box)=>{
                     box.disabled=true;
                });

        }
    }
}
function drawfinder(){
    let count =0;
    for(let i=0;i<9;i++){
        if(boxes[i].innerText=="X" || boxes[i].innerText=="O") count++;
    }
    if(count == 9){
            msg.innerText='Game is Draw';
            msgcon.classList.remove("hide");
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn==true){
           box.innerText="X";
           turn =false;
        }
        else{
            box.innerText="O";
           turn =true;
        }
        box.disabled=true;
        checker();
        drawfinder();
    });
});

resetbtn.addEventListener("click",()=>{
    // boxes.forEach((box)=>{
    //     box.innerText="";
    //     box.disabled=false;
    // })
    location.reload();
});
