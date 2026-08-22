//give the  updated color code to h2
let btn =document.querySelector('button');
btn.addEventListener("click",function(){
    let head=document.querySelector('h2');
    let div=document.querySelector('div');
    // console.log(`"${getColor()}"`);
    let c=getColor();
    div.style.backgroundColor='rgb(210,216,166)';
    head.innerText=`${getColor()}`;
    console.log("color updated!!");
});

//now give the color to div:)

function getColor(){
   let r= Math.floor(Math.random()*255);
   let g=Math.floor(Math.random()*255);
   let b=Math.floor(Math.random()*255);
   let color=`rgb(${r},${g},${b})`;
   return color;
   
}
