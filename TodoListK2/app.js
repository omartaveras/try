input = prompt("What would you like to do?");
const todos = ['Collect Sample', 'Find Vinyls', 'Sampling' ]

while (input !== 'quit' && input !== "q") {
    if (input === 'list') {
        console.log("********************************");
        for (i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`)
        }
        console.log("********************************");
    }
    input = prompt("What would you like to do?");
}
console.log("Ok quit the App");