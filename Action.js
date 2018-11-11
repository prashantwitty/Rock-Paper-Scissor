let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =document.querySelector(".score-board");
const result_p =document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissor_div =document.getElementById("s");

function getComputerChoice(){
    const choices =['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function ltw(l){
    if (l==="r") return "rock";
    if (l==="p") return "paper";
    if (l==="s") return "scissor";



}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const usw="user".fontsize(3).sub();
    const csw="comp".fontsize(3).sub();
    result_p.innerHTML = `${ltw(userChoice)} ${usw} beats ${ltw(computerChoice)} ${csw} . You Win &#x1F525`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow');},500)
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const usw="user".fontsize(3).sub();
    const csw="comp".fontsize(3).sub();
    result_p.innerHTML = `${ltw(userChoice)} ${usw} loses ${ltw(computerChoice)} ${csw} . You lost! &#x1F625`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow');},500)
}
function draw(userChoice,computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const usw="user".fontsize(3).sub();
    const csw="comp".fontsize(3).sub();
    result_p.innerHTML = `${ltw(userChoice)} ${usw} Ties ${ltw(computerChoice)} ${csw} . &#x1F605`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow');},500)

}

function game(userChoice){
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case"rs":
        case"pr":
        case"sp":
        win(userChoice,computerChoice)
        break;
        case"sr":
        case"ps":
        case"rp":
        lose(userChoice,computerChoice)
        break;
        case"rr":
        case"pp":
        case"ss":
        draw(userChoice,computerChoice)
        break;
    }

}
function main() {
    rock_div.addEventListener('click', function(){
     game("r");   
    })
    paper_div.addEventListener('click', function(){
     game("p");   
    })
    scissor_div.addEventListener('click', function(){
     game("s");   
    })
}
main();