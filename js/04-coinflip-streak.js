/*eslint-env browser*/
var coinflip;
do{
    coinflip = Math.round(Math.random());
    if(coinflip == 0){
        window.console.log("Heads");
    }else{
        window.console.log("Tails");
    }
}while(!coinflip);