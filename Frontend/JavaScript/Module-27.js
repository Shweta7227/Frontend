let first = document.querySelector('#first');
let second = document.querySelector('#second');
let third = document.querySelector('#third');
let fourth = document.querySelector('#fourth');
let fifth = document.querySelector('#fifth');

//This is having 1.repeated timeset call 2.again and again repeating the color 3. need to calculate the time:)
//first color

setTimeout(() => {
    first.style.color = "red";
}, 1000);

//second color

setTimeout(() => {
    first.style.color = "orange";
}, 2000);

//third color

setTimeout(() => {
    first.style.color = "blue";
}, 3000);

//this have problem : 1.repeated timeset call 3.neet to calculate the time:)

function changeColor1(clr) {
    second.style.color = clr;
}

setTimeout(() => changeColor1("red"), 1000);
setTimeout(() => changeColor1("orange"), 2000);
setTimeout(() => changeColor1("blue"), 3000);


//problem: 3.time need to calculate
function changeColor2(clr, delay) {
    setTimeout(() => {
        third.style.color = clr
    }, delay);
}
changeColor2("red", 1000);
changeColor2("orange", 2000);
changeColor2("blue", 3000);

//callback hell:)
function changeColor3(clr, delay, nextChangeColor) {
    setTimeout(() => {
        fourth.style.color = clr;
        if (nextChangeColor) nextChangeColor();
    }, delay);
}
changeColor3("red", 1000, () => {
    changeColor3("orange", 1000, () => {
        changeColor3("blue", 1000);
    });
});


//by using promise : return (1.resolve(fulfilled) , 2: reject()rejected  , 3: pending (unkown))
function changeColor4(clr, delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            fifth.style.color = clr;
            if(fifth.style.color == clr){
                resolve("Color changed");
            }
            else{
                reject("color not changes");
            }
        }, delay);
    })
}
let req =changeColor4("red",1000)
    .then((result)=>{
        console.log("result: ",result);
        console.log("red color changed");
        return changeColor4("orange",1000);
    })
    .then((result)=>{
        console.log("result: ",result);
        console.log("Orange color changed");
        return changeColor4("blue",1000);
    })
    .then((result)=>{
        console.log("result: ",result);
        console.log("blue color changed");
    })
    .catch((error)=>{
        console.log("error: ",error);
        console.log("Color change req is rejected somewhere");
    })

//break point :)
function one(){
    return 1;
}
function two(){
    return one() + one();

}
function three(){
    debugger;
    let ans=  two() + one();
     console.log(ans);
}
three();