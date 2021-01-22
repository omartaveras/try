//App dev inprogress.. .

input = prompt("What would you like to do?");
const todos = ['Collect Sample', 'Find Vinyls', 'Sampling' ]

while (input !== 'quit' && input !== "q") {
    if (input === 'list') {
        console.log("********************************");
        for (i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("********************************");
    } else if (input === "new") {
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to list.`);
    } else if (input === "delete") {
        const index = parseInt(prompt("OK, enter an index to delete: "));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`OK, deleted ${deleted[0]}`);            
        } else {
            console.log("Unknow index.. .");
        }
        
    }
    input = prompt("What would you like to do?");
}
console.log("Ok quit the App");
