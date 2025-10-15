let favorite ="The witcher";

let guess =prompt("guess my favorite movie ");
 while((guess != favorite) && (guess != "quit")){
        guess =prompt("Wrong guess , please try again");
 }

 if(guess == favorite){
        console.log("You win");
 }