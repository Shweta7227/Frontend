console.log("Module 23");
//foreach
// let's whether the number is even or odd:
let a=[1,2,3,4,5];
function check(n)
{
    if(n%2==0){
        console.log(n,"even");
    }
    else
    {
        console.log(n,"odd");
    }
}
a.forEach(check);
//alternative :
[1,2,3,4,5].forEach((n)=>{
    if(n%2==0){
        console.log(n,"good");
    }
    else
    {
        console.log(n,"bad");
    }
})

const student=[
    {
        name:"Shweta",
        marks: 98
    },
    {
        name:"Aman",
        marks: 99
    },
    {
        name:"Rohit",
        marks: 92
    }
];
student.forEach((value)=>{
    console.log(value);
    console.log(value.marks);
});

//Map:
let arr=a.map((el)=>{
 return el*2;
});
console.log(arr);

let gpa=student.map((value)=>{
        return value.marks/10;
    }
    );
console.log(gpa);

//filter:
let ans=a.filter((el)=>{
    if(el%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);
//alternative :
let res=a.filter((e)=>(e%2==0));
console.log(res);

//every: AND
let val=a.every((e)=>{
    if(isFinite(e)){
        return true;
    }
    return false;
});
console.log(val);
//some : OR
let result=a.some((e)=>{
    if(!isFinite(e)){
    return true;
}
else{
    return false;
}
})
console.log(result);

//Reduce
let value=a.reduce((acc,num)=>{
 return acc+num;
})
console.log(value);

//alt
let max=[12,23,1,4,21,51].reduce((acc,el)=>{
    console.log(acc);

    if(acc>el){
       return acc; //this 
    }
    return el; // or this return any of them work they will submit their values in acc(accumulator);
})
console.log(max);

// Q1. Check if all the numbers in our array are multiples of 10:
let num=[20,40,60,50,60,70,700,80,90,100];
console.log(num.every((e)=>(e%10==0)));
// Q2. create a function to find the min number in an array:
let min=num.reduce((acc,e)=>{
    if(acc<e){
        return acc;
    }
    else{
        return e;
    }
});
console.log("The min value of the array:",min);

// same ..., opposite jobs:=> Spread: console.log(...arr);  =>Rest : 

function test(...args) {
    console.log(args);
}

//Spread 
let name="Shweta Sindhu";
console.log(...name);
let b=[1,2,3,4,5,6,7,8,9,10];
console.log(...b);

function show(b){
    console.log(arguments);//it's a collection 
    // arguments.push(1); //it's a collection so we can't apply array methods on it 
    console.log(arguments);
}
show(b);
// rest with args
function tell(...args){
    console.log(args); //create an real array
}
tell(1,2,3,4,5,5,6,6,9);

//multiple parameters in function with rest
function run(msg, ...args){
    console.log(msg);
    console.log(args);
}
run(1,2,3,4,5,6,7,8,9,10); //first arg will goes to the msg (data types doesn't matters) and rest will to the ...agrs

function sum(...args){
    return args.reduce((args,el)=>args+el); // args inside the reduce func is not args arrays it's and variable with function scope called as accumulator :
}
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// Destructuring
// On Array:
// Storing multiple values  in varible variables
let a=["A","B","C"];
let b=[N1,N2,N3]=a;
console.log(N1,N2,N3);
console.log(b);
a.push("D","E","F","G");
console.log(a);
let [M1,M2,...rest]=a; //Is it Works like spread or rest ?? It is REST. ✅ 
console.log(M2); 
console.log(...rest); //Here ...rest is SPREAD.
// console.log(rest);
console.log(M1);

//On Object
const stu={
    name: "Shweta",
    age: 23,
    class: "MCA Final yr",
    subject: ["AI","CN","DN"],
    pwd:"123456"

};
let {name}=stu.name; //old and long way to go
// let {age:old}=stu.age;
let {name:Name ,pwd: pswd}=stu; //this key will serach for the same key in stu object but pwd changed into pswd so here pswd is key here:
console.log(Name);
console.log(pswd);
// let {class, city="Sikkim"}=stu;   Why this is showing error ?

let {grade:Class, city="Sikkim"}=stu;
// console.log(class); this will not work ? bcz class is reserved keyword
console.log(Class);
console.log(city);//sikkim will show up until we provide the city to the object:

// console.log(Symbol.iterator);

//Assigment Question:
// Q1.
let a=[1,2,3,4,5];
let  array=(a)=>{
    // let sqr=1;
    let sum=0;
    let n=a.length;
    for(let i=0;i<n;i++)
    {
        sum+=a[i];
        console.log("Sqaure of ",i,"is: ",a[i]*a[i]);
    }
   console.log("Sum of the array elements is:",sum);
   console.log("Average:",sum/n);
}
array(a);

let arr=a.map((e)=>e*e);
console.log(arr);
let ans=a.reduce((acc,e)=>acc+e);
console.log(ans);
console.log(ans/a.length);

let string =["Shweta","Rinku","Deepak"];
console.log(string.map((str)=>str.toUpperCase()));


const doubleAndReturnArgs=(a, ...args)=>[
    ...a,
    ...args.map((v)=>v*2),
];
doubleAndReturnArgs([1,2,3],4,4);//[1,2,3,8,8]
doubleAndReturnArgs([2],10,4);//[2,20,8]