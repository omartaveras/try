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

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Snake eyes!')
    } else (
        console.log('Not Snake eyes. :.(')
    )
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } 
    return false;
}