function greet(firstName, lastName ){
    console.log(`Hey there, ${firstName} ${lastName[0]}`)
}

function repeat(str, numTime) {
    let result = '';
    for (let i = 0; i < numTime; i++){
        result += str;
    }
    console.log(result);
}