const startBtn= document.querySelector("#startbtn");
const userPick= document.querySelector("#userpick");
const markerLabel= document.querySelector("#markerlabel");
const container = document.querySelector('.game-board');
const tileDivs= document.querySelectorAll(".tiles");
const markerSelection= document.querySelector(".marker-selection");
const markerX= document.querySelector("#marker-x");
const markerO= document.querySelector("#marker-o");

let currentMarker = "X";

startBtn.addEventListener("click", ()=>{
    startBtn.classList.add("disabled");
    let playerOneName= prompt("Input name of player one");
    let playerTwoName= prompt("Input name of player two");
    userPick.innerHTML=`${playerOneName}, pick your marker`;

    

    markerX.addEventListener("click", ()=>{
        currentMarker = "X";
        userPick.innerHTML=`${playerOneName} Your marker is "X",
        ${playerTwoName} your marker is "O"
        <br> Refresh to play again if there is no winner`
    });
    markerO.addEventListener("click", ()=>{
        currentMarker = "O";
        userPick.innerHTML=`${playerOneName} Your marker is "O",
        ${playerTwoName} your marker is "X"
        <br> Refresh to play again if there is no winner`
    });


    tileDivs.forEach((div) => {
        div.addEventListener('click', () => {
            if (div.innerHTML === "") {
                div.innerHTML = currentMarker;
                currentMarker = (currentMarker === "X") ? "O" : "X"; // Toggle between X and O
            }
        });
    });


    markerLabel.innerHTML="Choose your Marker";
    confirmBtn= document.createElement("button");
    confirmBtn.id= "confirmbtn";
    document.querySelector('.game-header').appendChild(confirmBtn);
    confirmBtn.innerHTML= "Confirm";
    confirmBtn.addEventListener("click", ()=>{
        markerSelection.classList.add("disabled");
        markerLabel.innerHTML="Tap any tile to start";


        function checkForWin(){
        if(
               tileOne.innerHTML=="X" && tileTwo.innerHTML=="X" && tileThree.innerHTML=="X"
            || tileOne.innerHTML=="X" && tileFour.innerHTML=="X" && tileSeven.innerHTML=="X"
            || tileOne.innerHTML=="X" && tileFive.innerHTML=="X" && tileNine.innerHTML=="X"
            || tileFour.innerHTML=="X" && tileFive.innerHTML=="X" && tileSix.innerHTML=="X"
            || tileTwo.innerHTML=="X" && tileFive.innerHTML=="X" && tileEight.innerHTML=="X"
            || tileThree.innerHTML=="X" && tileFive.innerHTML=="X" && tileSeven.innerHTML=="X"
            || tileSeven.innerHTML=="X" && tileEight.innerHTML=="X" && tileNine.innerHTML=="X"
            || tileThree.innerHTML=="X" && tileSix.innerHTML=="X" && tileNine.innerHTML=="X"
            ){
            userPick.innerHTML=`${playerOneName},
            ${playerTwoName} I kinda forgot the marker u guys chose, lol &#128516;, but anyways, Marker "X" is the winner
            <br> Refresh to play again`
            container.classList.add("disabled");
            clearInterval(intervalId);
        }      
        else if(
           tileOne.innerHTML=="O" && tileTwo.innerHTML=="O" && tileThree.innerHTML=="O"
        || tileOne.innerHTML=="O" && tileFour.innerHTML=="O" && tileSeven.innerHTML=="O"
        || tileOne.innerHTML=="O" && tileFive.innerHTML=="O" && tileNine.innerHTML=="O"
        || tileFour.innerHTML=="O" && tileFive.innerHTML=="O" && tileSix.innerHTML=="O"
        || tileTwo.innerHTML=="O" && tileFive.innerHTML=="O" && tileEight.innerHTML=="O"
        || tileThree.innerHTML=="O" && tileFive.innerHTML=="O" && tileSeven.innerHTML=="O"
        || tileSeven.innerHTML=="O" && tileEight.innerHTML=="O" && tileNine.innerHTML=="O"
        || tileThree.innerHTML=="O" && tileSix.innerHTML=="O" && tileNine.innerHTML=="O"
        ){
            userPick.innerHTML=`${playerOneName},
            ${playerTwoName} I kinda forgot the marker u guys chose, lol &#128516;, but anyways, Marker "O" is the winner
            <br> Refresh to play again`
            container.classList.add("disabled");
            clearInterval(intervalId);
        }
        
    }
            
        const intervalId = setInterval(checkForWin, 200); // Checks every 0.2 seconds
    });

});

// linking the DOM elements with the javascript 
const tileOne= document.querySelector(".one");
const tileTwo= document.querySelector(".two");
const tileThree= document.querySelector(".three");
const tileFour= document.querySelector(".four");
const tileFive= document.querySelector(".five");
const tileSix= document.querySelector(".six");
const tileSeven= document.querySelector(".seven");
const tileEight= document.querySelector(".eight");
const tileNine= document.querySelector(".nine");




