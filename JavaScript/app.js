// console.log("Hello World !!");
// console.log("Shweta Sindhu");

let a=10;
let b=20;
console.log("Sum is: ",a+b);
console.log("Arithmetic operations:");
a=10;
b=5;
console.log(`Value of a is ${a} and b is ${b}`);
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log("Unary operator:");
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

console.log("Assignment operator:");
let c=10;
console.log("value of c is: ",c);
console.log(c+=a);
console.log(c-=a);
console.log(c*=a);
console.log(c/=a);
console.log(c%=a);
console.log("Comparison operator:");
console.log(a<c);
console.log(a<=c);
console.log(a>c);
console.log(a==b);
let age=20;
console.log(age>=18);
console.log(a!=b); //not eqaul to 
console.log(1==true);

console.log("Conditions:");
a=100;
console.log("value of a is :",a);
if(a<18)
{
    console.log("a is having lesser value than the 18!!");
}
else
{
    console.log("a is having greater value than 18!!");
}
console.log("Thank you for the input..");
let name ="Shweta Sindhu";
if(name=='Shweta Sindhu')
{
    console.log(`Hello ${name}, you are in!!`);
}
console.log("Traffic question:");
let color="red";
if(color==='red')
{
    console.log("Please, Stop!");
}
else if(color==="yellow")
{
    console.log("Slow down..");
}
else if(color==="green"){
    console.log("Gaoooo!!!!!!");
}


console.log("Logical operators:");
 console.log("AND");
 console.log(true && true);
 console.log(true && false);
 console.log(false && false);
 console.log(false && true);

 console.log("OR");
 console.log(true || true);
 console.log(true || false);
 console.log(false || false);
 console.log(false || true);

  console.log("NOT");
 console.log(!true);
 console.log(!false);
 console.log(!(false && false));
 console.log(!false && false);
alert("Please don't make mistakes!!!");
console.error("This is an error:::");
console.warn("Syntax is wrong..");
// prompt("Enter yout name:");
console.log(prompt("Enter your name :") );
let firstName=prompt("Enter your first name :");
let lastName=prompt("Enter your last name:");
console.log(`${firstName+" "+lastName} is your full name!!`);