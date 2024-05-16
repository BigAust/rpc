function getComputerChoice(){
    getRandom = Math.floor(Math.random() * 3);
    
    if (getRandom === 0){
        return "Rock";
    }
        
    else if (getRandom === 1){
        return "Paper";
    }

    else {
        return"Scissors";
    }
}   

function getHumanChoice(){
    let choice = prompt("Do you choose rock, paper, or scissors?");
    return choice;
}
console.log(getHumanChoice());

function humanScore(){

}

function computerScore(){
    
}
