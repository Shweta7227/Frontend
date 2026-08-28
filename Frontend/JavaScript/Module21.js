//function without parameter

function dice(){
 let randomnumber=Math.floor(Math.random()*6+1);
 return randomnumber;
}
console.log(dice());

// function with parameter

function printName(name){
    console.log("the name is :",name);
}
let name=prompt("Enter the name :");
printName(name);

//function with multiple parameter

function info(name , age){
    console.log("The name is:",name," and the age is : ",age);
}
let a=prompt("Enter the name:");
let b = prompt("Enter the age :");
info(a, b);


//function with operations

function add(num1,num2){
    console.log("The sum is:",num1+num2);
}
add(5,10);

//function that print the table of a number:
 let n= prompt("Enter the number to print the table:");
function table(n){
    for(let i=0;i<=10;i++){
       console.log(n+"*"+i+"="+n*i);
    }
}
table(n);

// function with return statement

function sum(a,b){
 return a+b;
}
let a = Number(prompt("Enter the first number:")); // we have to covert in string to number because prompt always return string
let b = Number(prompt("Enter the second number:")); 
// let s=;
console.log("The sum of is :",sum(a,b));
console.log("The sum of is :",sum(sum(5,10),15)); // we can also use function inside function);


// returning  statement 
function ans(name, age){
    // string and integer both can be returned by the return statement but we can only return one value at a time.
    return  "The name is: "+name+" and the age is : "+age;
}
console.log(ans("Shweta", 23));

// return the sum from 1 to n 
function sumup(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) 
    {
        sum += i;
        i++;
    }
    return sum;
}
let n = Number(prompt("Enter the value of n :"));
console.log("The sum of 1 to n is :", sumup(n));

//return the concatination of array of strings
let arr=["Shweta","Rohan","Rohit","Ramesh"];
function concatinate(arr) {
    let result="";
    for(let i=0;i<arr.length;i++){
        result+=arr[i]+" ";
    }
    return result;
}
console.log(concatinate(arr));
// Scope
// :determines the accessibility of variables, functions, and objects in some particular part of your code during runtime.

// function  scope with  variable 

let a=10; //global variable
function scope_a(){
    let a=20; //local variable
    console.log("The variable value of A is :",a);
}
console.log("The  value of the varibale a is :",a);
scope_a();

var b=30; //global variable
function scope_b(){
    var b=40; //local variable
    console.log("The variable value of B is :",b);
}
console.log("The  value of the varibale b is :",b);
scope_b();

const c=50; //global variable
function scope_c(){
    const c=60; //local variable
    console.log("The variable value of C is :",c);
}
console.log("The  value of the varibale c is :",c);
scope_c();

// block scope with variables:

let a = 10; //global variable
for (let i = 0; i < 5; i++) {
    let a = 20; //local variable  
    console.log("The variable value of A is :", a);  
}
console.log("THe value of the variable a is :",a);


var b = 10; //global variable
for (let i = 0; i < 5; i++) {
    var b = 20; //local variable  
    console.log("The variable value of B is :", b);  
}
console.log("THe value of the variable b is :",b); //value changes by block scope

const c = 10; //global variable
for (let i = 0; i < 5; i++) {
    const c = 20; //local variable  
    console.log("The variable value of C is :", c);  
}
console.log("THe value of the variable c is :",c);
for (let i = 0; i < 5; i++) {
    var c = 20;
}
console.log("THe value of the variable c is :",c); //value changes by block scope

// lexical scope:

let a=10; //global variable
function outer(){
    let b =20; //local variable
    function inner(){
        let c =30;
        console.log("THe value of the variable a is :",a);
        console.log("the value of the variable b is:",b);
        console.log("The value of the variable c is :",c);
    }
    inner();
}
outer();

var a =10;
console.log("The value of the variable a is :",a);
var a=20;
console.log("The value of the variable a is :",a);


// fucntion expression:
let name =function()
{
    console.log("The name is: Shweta Sindhu");
}
name(); //function call

//function expression with parmeters:
let sum=function(a,b){
    return a+b;
}
// console.log("The sum is :",sum(21,31));

//Higher order functions: as return statement
function outerFunction(){
    return sum(210,31);
}
console.log("The sum is :",outerFunction());


//Higher order functions: as parameter
function higherOrderFunction(callback) {
    return callback(210, 31);
}
console.log("The sum is :", higherOrderFunction(sum));


//higer order function to call function as much we want , we don't have to call the function manually by call the function again and again
let greeting = function (greet, times) {
    for (let i = 0; i < times; i++) {
        greet();
    }
}
let greet = function () {
    console.log("Namaste, Shweta Sindhu");
}
let times = 20;
greeting(greet, times);

//higher order function as function definition in argument:
function hello(hellos, times) {
    for (let i = 0; i < times; i++) {
        hellos();
    }
}
hello(function () { console.log("Hello, Shweta Sindhu") }, 1000); //we can also define fuction in argument but not in parameter because parameter is a variable and we can't assign value to variable in argument but we can define function in argument because function is a block of code and we can define block of code in argument.


//Practice
// let func =
    // func();

let info = function (name, profession, age, status, qualification) {
    console.log("My name is :", name, " and I'm "+age+ " years old ", " annd I'm ", status, " rightnow  having the qualification upto", qualification, " in ", profession);

}
// info();

// let call = function (func1, func2) {

//     func1("Shweta Sindhu", 23);
//     func2("Shweta Sindhu", "Engineering", 23, "Unmarried", "Graduate");
//     return 1;
// }
// call(function (a, b) {console.log("The name is :", a, " and  the age is :", b);},
// info
// );


//Higher order function : Return statement in function calling
let calling = function(){
    return info("Shweta Sindhu", "Engineering", 23, "Unmarried", "Graduate");
}
calling();
// High order function : return satement with function definition:

let run=function(){
    return  function(){
        console.log("Say Helloooooo");
    };
}
run()();

//Return with function calling:
let summing=function(a,b){
    return a+b;
}
function check(){
    return summing(2,4);
}
console.log(check());

//Return with function definition
function checkout(){
    return function(n){
        if(n%2==0){
            console.log("even number");
        }
        else{
            console.log("odd number");
        }
    }
}
checkout()(1345);

// let request=console.log("Enter the request:");
function functionFactory(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong request");
    }
}
functionFactory("even")(1021);


//Methods: object of function
let calculator={
    add: function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mult:function(a,b){
        return a*b;
    },
    div:function(a,b){
        return a/b;
    }
};
console.log(calculator.add(2,3));
console.log(calculator["mult"](2,3));

//Shorthand Methods
console.log("Shorthand practice:")
let calculate={
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mult(a,b){
        return a*b;
    },
    div(a,b){
        return a/b;
    }
};
console.log(calculate.add(2,3));
console.log(calculate["mult"](2,3));

// Assignment questions:

// Q1.
function returning(n) {
    let a = [2, 3, 183, 47, 12, 21, 203, 40, 1];
    let b = [];
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > n) {
            b[j++] = a[i];
        }
    }
    return b;
}
console.log(returning(1));

// Q2.
let unique = function (str) {
    let u = "";
    let i = 0;
    while (i < str.length) {
        if (u.indexOf(str[i]) == -1) {
            u += str[i] + "";
        }
        i++;
    }
    return u;
}
console.log(unique("abcdabcdefgggh"));

//Q3.
function longestCountry(country) {
    let largest = country[0];
    for (let i = 1; i < country.length; i++) {
        if (country[i].length > largest.length) {
            largest = country[i];
        }
    }
    return largest;
}
let country = ["Australia", "Germany", "UnitedStates of America"];
console.log(longestCountry(country));

// Q4.
let counting = function (str) {
    let v = 0;
    let s = "";
    for (let i = 0; i < str.length; i++) {

        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            s += str[i] + "";
            v++;
        }
    }
    let store = [s, v];
    return store;
}
console.log(counting("Shweta Sindhu"));

// Q5.
let range=function(start, end){
    return(Math.floor(Math.random()*(end-start+1))+start);
}
console.log(range(21,25));
