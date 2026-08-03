console.log("object literals");
const student={
    name: "Shweta Sindhu",
    age: 23,
    marks: [81,83,89,90,95,91,90,87,89]
};
// console.log(learner.age);
const obj={
    names:19,
    2:"b",
    true:100,
    undefined:"d",
    null:"e"
};
console.log(obj["1"]); //it is not giving error 
console.log(student["marks"]); //but this is giving error
console.log(student["name"]);//same error 
console.log(obj[true]); //no error
console.log(student);
console.log(student.marks);
console.log(student.marks[7]);
console.log(student["marks"]);
let key="age";
console.log(
student[key]
);
const learner={
    name: "Shweta Sindhu",
    age: 231,
    marks: [81,83,89,90,95,91,90,87,89],
    city: "Hisar"
};

//add and update in object literals:
console.log(learner.city);
learner.city="Gagtok";
console.log(learner.city);
learner.gender="Female";
console.log(learner.gender);
learner.marks="A+";
console.log(learner.marks);
//to delete any key-value/property
delete learner.city;
console.log(learner.city);
console.log(learner);
//object of objects:
const classroom={
    Arjun:{
        grade:"A+",
        city:"Gangtok"
    },
    Shweta:{
        grade:"A",
        city:"Siliguri"
    }
};
console.log(classroom);
console.log(classroom.Shweta);
console.log(classroom.Shweta.city);
classroom.Shweta.city="Gangtok";
console.log(classroom.Shweta.city);

//Array of objects:
const classInfo=[
    {
        name:"Arjun",
        city:"Gangtok",
        grades:"A+"
    },
    {
        name:"Shweta",
        city:"Siliguri",
        grades:"O"

    }
];
console.log(classInfo);
console.log(classInfo["1"]);
console.log(classInfo[1].name);
classInfo[1].gender="Female";
console.log(classInfo[1]);

//Math object 
console.log(Math);
console.log("Value of E is ",Math.E);
console.log("PI value",Math.PI);
console.log("Round of(By nearest smallest number) 4.9 is ",Math.floor(4.9));
console.log("Round of(By nearest largest number) 4.9 is ",Math.ceil(4.9));
console.log("Absolute value of -5 is ",Math.abs(-5));
console.log("Power of 2^3 is ",Math.pow(2,3));
console.log("Random value that we get is ",Math.random());
//Random Integers:)
console.log("-------------------------");
let num=Math.random();
console.log("Random number: ",num);
num=num*2;
console.log("Random number after X 2: ",num);
num=Math.floor(num);
console.log("Random number after floor the value: ",num);//range id now 0-9
num+=1; //range is now from 1-10
console.log("Random number after adding one in it:",num);
 
//In short :
console.log(Math.floor(Math.random()*10)+1);
//1- 100;
console.log( Math.floor(Math.random()*100)+1);
//1-5
console.log(Math.floor(Math.random()*5)+1);
//21-25
console.log(Math.floor(Math.random()*5)+21);//generates 0-5 then we add 21 thta's gives -->21-25 range numbers
//Guessing game
let number=Math.floor(Math.random()*10)+1;
let option=prompt("Are you want to guess number : Yes /No");
while(option=="Yes")
{
    let guess=prompt("Enter the number of you guess from 1-10:");
    if(guess==number)
    {
        console.log("Congrats !! you geuss it right:)");
        break;
    }

        console.log("Opps! your geuss is wrong:)");
        option=prompt("Do you want to guess  again or want to quit (Yes /No)");
        
    if(option=="No")
    {
        console.log("Thank you for your time!!");
        break;
    }
    
}
