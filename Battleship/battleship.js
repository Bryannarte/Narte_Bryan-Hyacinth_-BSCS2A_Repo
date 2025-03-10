console.loh("The battleship")

// declaring variables//

var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess 
var hits = 0 ;
var guesses = 0;
var isSunk = false;


while(isSunk == false) (
     guess = prompt ("Ready!, aim !, shoot!, awesome!, (enter number 0-6"):
    
     if (guess< 0 || guess > 6) {
        alert ("Please enter the correct number!!!")    
    } else {
        guesses = guesses + 1 ;
        if (guess == location1 || guess == location2 || guess == location3) ( 

                hits += 1;
                
                if (hits ==3) {
                 isSunk = true;
                 alert ("game over")
              } 
        )
    }
    
    
)

var stats = "You beat the battleship at: " + guesses + " guesses " + " your precisely shot : " + (3/guesses);

alert(stats);
