// let favDrinks = ["Cola", "Fanta", "Coffee"]
// console.log(favDrinks[0]);
// console.log(favDrinks[1]);
// console.log(favDrinks[2])

// for (let i = 0; i < favDrinks.length; i++) {
//     console.log(favDrinks[i]);
// }

// let multiplesTwo = [];

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

// let age = 15;

// while(age <18) {
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an Adult!")

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade") {

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }

// console.log(currentCard);

// Activity 1 - Create an array that lists your favourite films, up to 5 elements.
// let favFilms = [
//     "Lion King",
//     "Forrest Gump",
//     "Saving Private Ryan",
//     "Hurtlocker",
//     "Transformers"
// ];
// // add 2 more using method
// favFilms.push("Ghostbuster");
// favFilms.push("Rocky");
// console.log(favFilms);
// // use loo to cycle through the array
// for (let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i]);
// }

// Activity 2 - Generate 6 random numbers between 1 - 50 and log them to the console.
// let ranNum = [];
// while(ranNum.length < 6){
//     let r = Math.floor(Math.random() * 50) + 1;
//     if(ranNum.indexOf(r) === -1) ranNum.push(r);
// }
// console.log(ranNum);

// Activity 3 - If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.
// let numList = [];

// for(let i = 0; i < 10; i++){
//     if (i % 1 == 0){
//             numList.push(i);
//     }
// }

// console.log(numList.reverse());

// Activity 4 - Display 4 films stored in an array.
// Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

// let films = ["Matrix", "Ghostbusters", "Rocky", "Green Mile"];

// for (let i = 0; i < films.length; i++) {
//     console.log(films[i]);
// }
// if(films[3] == "Ghostbusters") {
//     console.log("Yay it's Ghostbusters;")
// }
// else {
//     console.log("Boo! We want ghostbusters!");
// }

// Activity 5 - Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number of divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not. 

// let randomNumbers = [];

// for (let i = 0; i < 6; i++) {
//   x = randomNumbers.push(Math.floor(Math.random() * 30));
// }
// console.log(randomNumbers);

// if (x % 7 == 0){
//     console.log(`${randomNumbers} is divisable by 7!`);
// }else{
//     console.log(`${randomNumbers} is not divisable by 7`);
// }

// Activity 6 - Imagine you’re a programmer for a social media platform! 
// You have been tasked with building a prototype for a mutual followers program.
// > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
// > Using a nested loop iterate over both arrays and console.log out the matching follower.

// annFollowers = ["Ben", "Tom", "John", "Richard"];
// evaFollowers = ["Tom", "Mike", "Ben", "Edward"];
// mutual_followers = [];
// for (let i = 0; i < annFollowers.length; i++) {
//     for (let index = 0; index < evaFollowers.length; index++) {
//         if (annFollowers[i] === evaFollowers[index]) {
//             mutual_followers.push(annFollowers[index]);
//         }
//     }
// }
// console.log(`Mutual followers: ${mutual_followers}`)

let bobsFollowers = [
    "Jo",
    "Adam",
    "Frank",
    "Ted",
    "Sean",
    "Chris",
    "Sophie"
];

let hannahsFollowers = [
    "Jo",
    "Damien",
    "Ted",
    "William",
    "Sean",
    "Sophie",
    "John"
];

for(let i = 0; i < bobsFollowers.length; i++){
    for(let n = 0; n < hannahsFollowers.length; n++){
        if(bobsFollowers[i] == hannahsFollowers[n]){
            console.log(`${bobsFollowers[i]} likes Bob and Hannah!`);
        }
    }
} 

// Activity 7 - Research on do...while loop, 
// find out about the difference between for loop, while loop and do...while loop. 
// Give an example of each.
// What are the pros and cons?

// while — loops through a block of code once; then the condition is evaluated. If the condition is true, the statement is repeated as long as the specified condition is true. for — loops through a block of code until the counter reaches a specified number.

// While loop checks the condition first and then executes the statement(s), whereas do while loop will execute the statement(s) at least once, then the condition is checked. While loop is entry controlled loop whereas do while is exit controlled loop.

//Beginning of For Loop
// result = '';

// for (let i = 0; i <= 5; i++) {
//     result += i + ' ';
// }

// if (result != '') {
//     console.log(result);
// } else {
//     console.log("No Result")
// }
//End of For Loop

// Beginning of While Loop
// result = '';
// i = 0;
// while (i > 0 && i < 5) {
//     i++;
//     result += i + ' ';
// }
// if (result != '') {
//     console.log(result);
// } else {
//     console.log("No Result")
// }
// End of While Loop

// Beginning of Do While Loop
// let i = 0;
// let result = '';

// do {
//     i += 1;
//     result += i + ' ';
// }
// while (i > 0 && i < 5);

// if (result != '') {
//     console.log(result);
// } else {
//     console.log("No Result")
// }
// End of Do While Loop

//Pros: It's straightforward. You loop through every single element for a given string or array . 
// Cons: It's very restricting, you can't determine where to start or how long you want to go on for. Incrementing is always set to one at a time.