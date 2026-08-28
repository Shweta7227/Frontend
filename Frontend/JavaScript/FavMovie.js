let favmovie="The Glory";
let guess=prompt("Let guess my fav movie:");
while(guess!=favmovie)
{
    if(guess=="quit")
    {
        
        break;
    }
    guess=prompt("Wrong guess !! Please try again");
}
if(guess == "quit")
{
    console.log("You quit !!! ");
}
else{
    console.log("Congrates !!\n You geuss right..");
}