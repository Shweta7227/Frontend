let max=prompt("Enter the max limit of number:");
let num=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the number:");
let i=0;
while(i<5)
{
    if(guess=="quit")
    {
        console.log("Thank you for your time:)");
        break;
    }
    else if(guess==num)
    {
        console.log("YES!! You guess it right!!");
        break;
    }
    else if(guess>num)
    {
        guess=prompt("Put some small number:");
    }
    else{
        guess=prompt("Try it with large number");

    }
    i++;
    
}
if(i==5)
{
    console.log("OOHH ! Sorry ,You the hit limit");
}
console.log("Number was ",num);