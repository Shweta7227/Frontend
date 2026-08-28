let btn=document.querySelector('button');
let inp=document.querySelector('input');

inp.addEventListener("keydown",function(event){
    // console.log("Code is = ",event.code);
    // console.log("Key is = ",event.key);
    if(event.code=="ArrowUp"){
        console.log('Character moves Up');
    }
    else if(event.code=="ArrowDown"){
        console.log('Character moves down');
    }
    else if(event.code=="ArrowLeft"){
        console.log('Character moves Left');
    }
    else if(event.code=="ArrowRight"){
        console.log('Character moves Right');
    }
    else{
        console.log('Character Takes wrong move');
        
    }
});