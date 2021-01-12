// let max = parseInt(prompt("Enter the maximum number:"));

// while (!max) {
//     max = parseInt(prompt("Enter a valid number, please!"))
// }

// const targetNum = Math.floor(Math.random() * max) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess:"));

// while (guess !== targetNum) {
//     if (guess > targetNum) {
//         guess = parseInt(prompt("Too High, Enter a new guess"));
//     } else {
//         parseInt(guess = prompt("Too Low, Enter a valid guess"));
//     }
// }
// console.log("You got it!! !")

// for of
// let subreddits = ['cringe', 'books', 'chickens', 'pics']

// for (i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

//modern
// for (let sub of subreddits) {
//     console.log(sub);
// }
// Alternative of classic for...
// for (subreddit of subreddits) {
//     console.log(`Visit reddit.com/r/${subreddit}`);
// }

// // FOR OF Loop
// const seatChart = [
//     ['Kri', 'Erik', 'Nita'],
//     ['Geo', 'Juan', 'Anto', 'Kev'],
//     ['Yuma', 'Sara', 'Jack', 'Deck']
// ];

// //console.log(seatChart)
// for (i = 0; i < seatChart.length; i++){
//     const row = seatChart[i];
//     console.log('Row numero: ' + i)
//     for (j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// //Artelnative For of
// for (let row of seatChart) {
//     for (let people of row) {
//         console.log(people);
//     }
    
// }

// for (let chart of 'Realbeatbiz') {
//     console.log(chart)
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let sqr of numbers) {   
    console.log(sqr*sqr);
    
}