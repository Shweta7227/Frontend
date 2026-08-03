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

