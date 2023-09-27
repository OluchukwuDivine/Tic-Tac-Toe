const startBtn= document.querySelector("#startbtn");
const userPick= document.querySelector("#userpick");
const markerLabel= document.querySelector("#markerlabel");
const tileDivs= document.querySelectorAll(".tiles");
const markerSelection= document.querySelector(".marker-selection");
const markerX= document.querySelector("#marker-x");
const markerO= document.querySelector("#marker-o");

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("disabled");
    let playerOneName= prompt("Input name of player one");
    let playerTwoName= prompt("Input name of player two");
    userPick.innerHTML=`${playerOneName}, pick your marker`;
    markerX.addEventListener("click", ()=>{
        userPick.innerHTML=`${playerOneName} Your marker is "X",
        ${playerTwoName} your marker is "O"`
    });
    markerO.addEventListener("click", ()=>{
        userPick.innerHTML=`${playerOneName} Your marker is "O",
        ${playerTwoName} your marker is "X"`
    });
    markerLabel.innerHTML="Choose your Marker";
    confirmBtn= document.createElement("button");
    confirmBtn.id= "confirmbtn";
    document.querySelector('.game-header').appendChild(confirmBtn);
    confirmBtn.innerHTML= "Confirm";
    confirmBtn.addEventListener("click", ()=>{
        markerSelection.classList.add("disabled");
        markerLabel.innerHTML="Tap any tile to start";
    });


    tileDivs.forEach((div, index) => {
        div.addEventListener('click', () => {
            console.log(`Clicked on Div ${index + 1}`);
            console.log(event.target.classList[1]);
            
        });
    });


});


