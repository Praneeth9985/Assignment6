/*eslint-env browser*/
var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Enter your choice, Heads or Tails");
var result = ( coinFlip >= 5 ) ? "H" : "T";

while(true){
    if(result === "H" && choice === "Heads"){
        window.alert("The flip was heads and you chose heads...you win!");
        break;
    }
    else if(result === "H" && choice === "Tails"){
        window.alert("The flip was heads but you chose tails...you lose!");
        break;
    }
    else if(result === "T" && choice === "Tails"){
        window.alert("The flip was tails and you chose tails...you win!");
        break;
    }
    else if(result === "T" && choice === "Heads"){
        window.alert("The flip was tails but you chose heads...you lose!");
        break;
    }
    else{
        window.alert("Please enter a valid choice!");
        break;
    }
}