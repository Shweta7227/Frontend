console.log("Hello World !!");
console.log("Shweta Sindhu");
// s=10;
// b=20;
// console.log("Sum is: ",s+b);
// console.log("Arithmetic operations:");
// let a=10;
// let b=5;
// console.log(`Value of a is ${a} and b is ${b}`);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// console.log("Unary operator:");
// console.log(a++);
// console.log(++a);
// console.log(a--);
// console.log(--a);

// console.log("Assignment operator:");
// c=10;
// console.log("value of c is: ",c);
// console.log(c+=a);
// console.log(c-=a);
// console.log(c*=a);
// console.log(c/=a);
// console.log(c%=a);
// console.log("Comparison operator:");
// console.log(a<c);
// console.log(a<=c);
// console.log(a>c);
// console.log(a==b);
// let age=20;
// console.log(age>=18);
// console.log(a!=b); //not eqaul to 
// console.log(1==true);

// console.log("Conditions:");
// a=100;
// console.log("value of a is :",a);
// if(a<18)
// {
//     console.log("a is having lesser value than the 18!!");
// }
// else
// {
//     console.log("a is having greater value than 18!!");
// }
// console.log("Thank you for the input..");
// let name ="Shweta Sindhu";
// if(name=='Shweta Sindhu')
// {
//     console.log(`Hello ${name}, you are in!!`);
// }
// console.log("Traffic question:");
// let color="red";
// if(color==='red')
// {
//     console.log("Please, Stop!");
// }
// else if(color==="yellow")
// {
//     console.log("Slow down..");
// }
// else if(color==="green"){
//     console.log("Gaoooo!!!!!!");
// }


// console.log("Logical operators:");
//  console.log("AND");
//  console.log(true && true);
//  console.log(true && false);
//  console.log(false && false);
//  console.log(false && true);

//  console.log("OR");
//  console.log(true || true);
//  console.log(true || false);
//  console.log(false || false);
//  console.log(false || true);

//   console.log("NOT");
//  console.log(!true);
//  console.log(!false);
//  console.log(!(false && false));
//  console.log(!false && false);
// alert("Please don't make mistakes!!!");
// console.error("This is an error:::");
// console.warn("Syntax is wrong..");
// // prompt("Enter yout name:");
// console.log(prompt("Enter your name :") );
// let firstName=prompt("Enter your first name :");
// let lastName=prompt("Enter your last name:");
// console.log(`${firstName+" "+lastName} is your full name!!`);
// let msg=" Hello World ";
// console.log(msg);
// console.log(msg.trim());
// let str="Shweta Sindhu";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
// console.log(str.indexOf("Sindhu"));
// str="  Shweta  ";
// str1=str.trim();
// console.log(str1.toUpperCase());
// str=" Shweta   sindhu";
// str1=str.trim().toUpperCase()
// console.log(str1);
// let s="Ilovecoding";
// console.log(s.slice(1));
// console.log(s.slice(1,5));
// console.log(s.slice(-2));
// let m=s.replace("o","x");
// console.log(m);
// let nums=[1,2,4,67,8];
// console.log(nums);
// console.log(nums[3]);
// console.log(typeof nums);
// console.log(nums.length);
// console.log(str.length);
// let students=["Shradha", "Aman","Shweta"];
// console.log(students[2]);
// console.log(students[2].length);
// console.log(students[2][3]);
// let alpha=["A","B","C"];
// console.log(alpha);
// alpha[9]="I";
// console.log(alpha);
// let cars=["audi","BMW","Mercedes"];
// cars.push("Pourche");
// console.log(cars);
// cars.push("AA");
// console.log(cars);

// console.log(cars.pop());
// console.log(cars);
// cars.unshift("Ferrari");
// console.log(cars);
// cars.unshift("AA");
// console.log(cars);
// console.log(cars.shift());
// console.log(cars);
// let months=["jan","feb,","march","april"];
// console.log(months.shift());
// console.log(months);
// console.log(months.shift());
// console.log(months);
// console.log(months.unshift("june"));
// console.log(months);
// console.log(months.unshift("july"));
// console.log(months);
// console.log(months.indexOf("july"));
// console.log(months.includes("july"));
// console.log(months.includes("feb"));
// let a=[1,2,3,4,5];
// let b=["a","b","c","d","e"];
// let c=b.concat(a);
// console.log(a);
// console.log(b);
// console.log(c);
// let d=a.concat(b);
// console.log(d);
// console.log("After reverse",a.reverse());
// console.log("Orginal array",a);
// console.log(b.reverse());
// console.log(a.reverse());
// console.log(a.slice());
// console.log(a.slice(2,3));
// console.log(a.slice(-2));
// console.log(a.slice(1));
// a=[1,2,3,4,5];
// console.log(a);
// console.log(a.splice(1,2,23,45));
// console.log(a);
// console.log(a.sort());
// nums=[[2,4,5],[3,2,4,6],[7,9]];
// console.log(nums.length);
// console.log(nums[0]);
// console.log(nums[1][3]);
// console.log(nums[1].length);
// let tic=[['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(tic);
// tic[0][1]='O';

// console.log(tic);



// object literals
let student=
{
    name:"Shweta Sindhu",
    ag  : 22,
    standard : "Mca 2nd yr"
}; 
console.log(student);
let post=
{
    username:"@ShwetaSindhu",
    content: "Hii from Shweta Sindhu an AI Engineer ",
    like: "5M",
    tags : ["@weopened", "MyComp"]

};
console.log(post);
console.log(post["username"]);
console.log(post.username);
//nested object
let classInfo={
 Shweta:
 {
    grade:"A++",
    city:"Sikkim"
 },
 Aman:
 {
    grade:"A++",
    city:"Sikkim"
 },
 Deepu:
 {
    grade:"A++",
    city:"Chandigarh"
 }
};
console.log(classInfo);
console.log(classInfo.Shweta.city);
//array of object
let Info=
[
    {
        name:"Deepu",
        city:"Gurgaon"
    },
    {
        name:"Shweta",
        city:"Sikkim"
    }
];
console.log(Info[1]);
console.log(Math);
//generate a random number 
// console.log(Math.random()*10);
console.log(Math.floor(Math.random()*6)+1);
//function
function Acq()
{
    console.log("ACQUIRE IT..");
}
// high Order function(function as an argument)
function multipleGreet(func,n)
{
    for(let i=1;i<=n;i++)
    {
        func();
    }
}
let greet=function()
{
    console.log("namaste!!");
}
multipleGreet(greet,4);
// high Order function(function as return)
let request=prompt("Enter your request!!");
Testing(request);
function Testing(request)
{
    if(request=="odd")
    {
        return function(n)
        {
            console.log(!(n%2==0));
        }
    }
    else if(request=="even")
    {
        return function(n)
        {
            console.log(n%2==0);
        }
    }
    else{
        console.log("Wrong input");
    }
}
let odd=function(n)
{
    console.log(!(n%2==0));
}
let even=function(n)
{
    console.log(n%2==0);
}
//method(functions in object as key and value)
const calculator=
{
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    multi:function(a,b){
        return a*b;
    }
};
//method(functions in object directly function)
const calculators=
{
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multi(a,b){
        return a*b;
    }
};