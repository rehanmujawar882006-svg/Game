let userScore=0;
let compScore=0;

const selection=document.querySelectorAll(".selections");


const showWinner =(userWin) =>{
    if (userWin){
        console.log("You Win")
    }
    else{
        console.log("You Lost");
    }
}


const drawGame=() =>{
    console.log("Game was draw")
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