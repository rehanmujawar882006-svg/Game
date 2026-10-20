let userScore=0;
let compScore=0;

const selection=document.querySelectorAll(".selections");


const showwinner =(userWin) =>{
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
        elseif(userchoice=="paper"){
            //rock,scissior
            userwin=compChoice=="secissor" ?false:true;

        }
        else{
            //
            userWin=compChoice=="rock" ?false:true;
        }
        showWinner(userWin);
     }
}

selection.forEach((selections) =>{
    selections.addEventListener("click",() =>{
        const userChoice=selections.getAttribute("id");
        playGame(userChoice);
    });
});