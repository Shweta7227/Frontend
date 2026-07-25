let todo = [];
let input = prompt("Enter you request");

while (true) {
    if (input == "list") {
        console.log("-------------------");
        console.log("Below is the list of your todo list:");
        if(todo.length==0)
        {
            console.log("your todo list is empty:");
        }
        else
        {
            for (let i=0;i<todo.length;i++) 
            {
                console.log(i,todo[i]);
            }
        }
    }
    else if (input == "add") {
        let task = prompt("Enter the task that you want to add:");
        todo.push(task);
        console.log("Your ",task," task is added !! ");
    }
    else if (input == "delete") {
        let idx=prompt("Enter your task index that you want to delete:");
        let dlt=todo.splice(idx,1);
        console.log(" Your ",dlt," task is deleted:");
    }
    else if (input == "quit") {
        console.log("Thank you for your time:");
        break;
    }
    input = prompt("Enter your next request:");
}
