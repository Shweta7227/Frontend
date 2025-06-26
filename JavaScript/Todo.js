let todo=[];
let req =prompt("Please enter your request:)");
while(true)
{
    if(req=="quit")
    {
        console.log("---------------");

        console.log("You quit the TODO");
        break;
    }
    if(req=="list")
    {
        console.log("---------------");

        for(let i=0 ;i<todo.length;i++)
        {
            console.log(i,"->",todo[i]);
        }
    }
    else if(req=="add")
    {
        console.log("---------------");
        let task=prompt("Please add your request");
        todo.push(task);
        console.log("Task added");
    }
    else if(req=="delete")
    {
        console.log("---------------");

        let idx=prompt("Please enter idx to delete the task");
        todo.splice(idx,1);
        console.log("Task deleted!!");
    }
    else 
    {
        console.log("Wrong request::");
    }
    req=prompt("Please enter your request");
}