console.log("Hello World");
let a;
console.log(typeof a);
var b=10;
console.log(b);
a=20;
console.log("Value of a:"+a);//what is this:here it will consider a as sttring 
console.log("Value of a is: ",a);//what is this
console.log(typeof a);
var b=30;
console.log("Value of b is: ",b); // redeclaration and reinitialization are allowed in var

console.log("My name is "+"Shweta Sindhu");
let c=30;
console.log("Sum of a and c is ",a+c);
console.log(`Sum of a and c is ${a+c}`); //template literal first it will calcualte the value of a+c and then it will print the value as string
console.log("Your pay"+ (a+c) +"is credited to your account") //first it will calculate the value of a+c and then it will print the value as string
console.log("Your pay is "+ a+c +"is credited to your account") //first it will print the value of a as string and then it will print the value of c as string
console.log(`Your pay is ${a+c} is credited to your account`) //first it will calculate the value of a+c and then it will print the value as string
console.log("your pay is ",a+c,"is credited to your account") //first it will calculate the value of a+c and then it will print the value as number
let sum ="the sum of a and c is "+(a+c);

//Alert and Prompt 
alert("Be active and stay healthy");
let name =prompt("Enter your name: ");
console.log("Your name is: ",name,"& your age is: ",prompt("Enter your age: "));

//Error and warning messages
console.error("This is error message !!!");
console.warn("This is warning message:::");