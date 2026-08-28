let inp=document.querySelector('input');
let btn=document.querySelector('button');
let li;

//Adding task in todo list:)
inp.addEventListener("change",function(){
    let task=this.value;
    li=document.createElement('li');
    li.innerText=task;

})
btn.addEventListener("click",function(){
    // let task=inp.innerText;// input innertext doesn't contains the inner-text
    let ul=document.querySelector('ul');
    ul.appendChild(li);
});


//Deleting Tasks from the list:)
let dlt = document.querySelector('#delete');
dlt.addEventListener("click",function(){
    let val=inp.value;
    let lis=document.querySelectorAll('li');
    let found=false;
    for(let le of lis){
        if(le.innerText==val){
            found=true;
            le.remove();
            alert(`${val} is deleted from the task`);
            break;
        }
    }
    if(found==false){
        alert("your task is not found in list!!");
    }

});

//editing the todo list's task
let edit=document.querySelector('#edit');

edit.addEventListener("click",function(){
    let val = inp.value;
    let lis = document.querySelectorAll('li');
    let found = false;

    for(let le of lis){
        if(le.innerText==val){
            // alert("Edit the task!!");
            found=true;
            alert("Edit the task!!");
            let newTask = prompt("Enter the new task:");
            le.innerText=newTask;
            break;
        }
    }
    if(found==false){
        alert("Task not found!!");
    }
});
