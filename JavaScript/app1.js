console.log("hello World");
console.log("LOOP PRACTICE:");
//for loop
let a=10;
console.log("Value of a is:"+a);
for(let i=1;i<=10;i++)
{
    console.log("i = ",i);
}
for(;a<=100;a=a+10)
{
    console.log("a value is: ",a);
}
// //pattern 
// for(let i=1;i<=3;i++)
// {
//     for(let j=i;j<=3;j++)
//     {
//         console.log("*");
//     }
//     console.log(" ");
// }
//while loop
let b=10;
while(b<=100)
{
    console.log("Value of b: ",b);
    b+=10;
}
let j=1;
for(let i=7;i<=10;i++){
    while(j<=5)
{
    if(j==4)
    {
        break;
    }
    console.log("Value of j is :",j);
    j++;
}
console.log("Value of i : ",i);
}
console.log("Hello");

//for of loop: this is used to access individual element from the collection 
let alpha=['a','b','c','d','e','f','g','h','i'];
for(i of alpha)
{
    console.log("value of is alpha is :",i);
}
//Loop with Arrays:
let fruits=["mango", "apple", "banana", "litchi","orange","berry","avacado", "watermelon", "muskmelon"];
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
//even fruits: 
for(let i=0;i<fruits.length;i+=2)
{
    console.log(i,fruits[i]);
}
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
console.log(fruits.slice(1,3));
console.log("After slice");
console.log(fruits);
// for(let i=0;i<fruits.length;i++)
// {
//     console.log(i,fruits[i]);
// }
console.log(fruits.splice(1,3,"papaya"));
for(let i=0;i<fruits.length;i++)
{
    console.log(i,fruits[i]);
}
// console.log(fruits);

//reverse array:
console.log("Reverse Array:)");
for(let i=fruits.length-1;i>=0;i--)
{
    console.log(i,fruits[i]);
}
let heroes=[["iron","spiderman","thor"],["superman","woder woman","flash"]];
