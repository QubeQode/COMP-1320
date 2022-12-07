const readline = require("readline-sync");

function doSome() {
    console.log("do");
}

while(true) {
    q = readline.questionInt("enter a number");

    if(q == 0) {
        break;
    } else if( q>0) {
        doSome();
    } else {
        console.log("invalid input try again");
    }
}