let inp=document.querySelector('input');
let p=document.querySelector('p');


inp.addEventListener("input",function(){
    console.log(this.value);
    p.innerText=this.value;
    // console.log(event);
    
});