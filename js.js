let userScore=0;
let compScore=0;

const showWinner =(userWin) =>{
    if (userWin){
       userScore++;
       userScorepara.innerText=userScore;
        msg.innerText="You Win 🥳";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText="You Lose 😔";
        msg.style.backgroundColor="red";
    }
}


const drawGame=() =>{
    console.log("Game was draw");
    msg.innerText="It's Draw 🤝 Play Again";
    msg.style.backgroundColor="black";
}

const genCompchoice=()=>{
    const option=["rock", "paper", "scissors"]
    const random=Math.floor(Math.random()*3) //Random value genetate
    return option[random];
}
const playGame=(userChoice) =>{
    console.log("user choice =",userChoice);
    const compChoice=genCompchoice();
     console.log("Comp choice =",compChoice);

     if(userChoice==compChoice){
        drawGame();
     }
     else{
        let userwin=true;
        if(userChoice=="rock"){
            //scissor,paper
            userwin=compChoice=="paper" ?false:true;
            
        }
        else if(userChoice=="paper"){
            //rock,scissior
            userwin=compChoice=="scissors" ?false:true;

        }
        else{
            //
            userwin=compChoice=="rock" ?false:true;
        }
        showWinner(userwin);
     }
}

selection.forEach((selections) =>{
    selections.addEventListener("click",() =>{
        const userChoice=selections.getAttribute("id");
        playGame(userChoice);
    });
});