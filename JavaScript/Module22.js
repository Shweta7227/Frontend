// //this :this calls the current object of the method
// let student={
//     name:"Shweta",
//     age:23,
//     DSA:100,
//     WebDev:100,
//     english:100,
//     getAvg(){
//         console.log(this);
//         let avg=(this.DSA+this.english+this.WebDev)/3;
//         console.log(`${this.name} got overall ${avg} marks`);
//     }

// }
// student.getAvg();

// let Avg =function(){
//     console.log(this); //this denots the window object (which is the highest/top level of object)
// }
// Avg();

// //try and catch
// //we use try and ctach to find the error easily : like this won't stop the below code eve after error is exist
// console.log("hello");
// try{ //if there is no error try will not throw any error 
//     console.log("Value of a is: ",a);
// }
// catch(err){ //catch can be used as function or like normal catch keyword if we use ctach as function it will use parameter to catch the throwed statement by try :)
//     console.log("This variable is not defined");
//     console.log(err);
// }
// console.log("Hii"); //without try & catch this line will not execute

// //Arrow function:(NAMELESS FUNCTION) they are compact functions and they are not stand alone functions:
// // Arrow functions in higher order functions
// let sum = (a,b)=>{return (a+b);} //these curly braces are for multiple lines of code single line direclty is also allowed;
// let value=function(sum){
    
//     console.log(  `the sum of is ${sum(21,3)}`);
// }
// value(sum);
// //direct calling  without any curely braces
// let info=(last)=>console.log("My name is Shweta",last);
// info("Sindhu");
// //single parameter without paranthesis is allowed:Note if there is no argunment we h=mus have to use the peranthesis
// let name=last=>console.log("My name is Shweta",last);
// name("Sindhu");
// //can remove the return statement if we are only returning something in that whole function buttttttt we have to use paranthesis instead of curely braces
// let cal=(a,b)=>(a+b)
// console.log(cal(34,3));

// //can store result of arrow function in variable:

// let val=cal(3,7);
// console.log("the stored value is :",val);

// //setTimeout function :this is function of window object
// console.log("hi freinds");
// setTimeout(()=>{console.log("My Name is Shweta Sindhu")},4000); //calling of setTimeout function with having two parameters : one is defining arrow function + other is giving time in milisecond
// // for(let i=0;i<=100000;i++)
// // {
// //     console.log(i);
// // }

// //set interval function:
// // setInterval(function,timeout);
// let id1=setInterval(()=>{console.log("1.Shweta Sindhu")},2000);
// console.log(id1);

// let id2=setInterval(()=>{console.log("2.Shweta Sindhu")},2000);
// console.log(id2);

// //This in Arrow function:
// const student={
//  name:"Shweta",
//  marks:99,
//  prop:this,
//  getName:function(){
//     console.log(this);
//     console.log(this.name);
//  },
//  getMarks:()=>{
//     console.log("this is my parent scope object",this);
//     console.log(this.marks);
//  }
// };
// // console.log(student.prop); //called the whole window object:
// student.getName();//
// student.getMarks();

// //Advantage of Arrow function  with this keyword
// const info={
//     cname:"Roaster",
//     info1:function(){
//         setTimeout(() => {
//             console.log("this is arrow function:",this.cname);
//         },4000);
//     },
//     info2:function(){
//         setTimeout(function(){
//             console.log("This is normal fucntion:",this.cname);
//         },8000);
//     }
// };
// info.info1();
// info.info2();

// //Practice Question:
// let square = n => (n*n);
// console.log("Sqaure is:",square(21));

let i=0;
let number=setInterval(
    ()=>{
        console.log("Hello World");
        i++;
        if(i==5)
        {
            clearInterval(number);
        }
    },2000);


setTimeout(()=>{console.log("Terminated!!")},12000);

//alternative:

let id=setInterval(()=>{console.log("Hiii!!")},2000);
setInterval(()=>{clearInterval(id)},10000);