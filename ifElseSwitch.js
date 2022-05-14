// Extra
// Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// let hour = 19;

// if (hour >=6 && hour < 12)
//     console.log('Good morning');
// else if (hour >=12 && hour < 18)
//     console.log('Good afternoon');
// else
//     console.log('Good evening');

// function testNum(a) {
//     let result;
//     if (a > 0) {
//       result = 'positive';
//     } else {
//       result = 'negative';
//     }
//     return result;
//   }
  
//   console.log(testNum(-5));

// let weather = "sunny";

// if (weather == "sunny") {
//     console.log("Well, I better wear some suncream!")
// } else if (weather == "rainy") {
//     console.log("Better take an umbrella");
// }

// if (1 === "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// if (1 != "1"){
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }

// let car = "Peugeot";

// switch(car){
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citron":
//         console.log("You've got an French boy!");
//         break;
//     case "Honada":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quite!");
//         break;
//     case "Mercedes":
//         console.log("You are proper posh German!");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all!");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korean cars are getting popular!");
//         break;
//     default:
//         console.log("You're car is not in the top ten cars in the World!");
        
// }

// Activity 1
// let age = 16;

// if (age >= 17) {
//     console.log("Yes I can serve you.");
// }
// else {
//     console.log("You aren't old enough.");
// }

// // Stretch 
// let age = 19;
// let country = "Brazil";

// if (age >= 17 && country == "UK") {
//     console.log("Yes I can serve you.");
// }
// else {
//     console.log("You aren't old enough.");
// }

// Activity 2

// let topping = "Onions";

// switch(topping){
//     case "Pepperoni":
//     case "Cheese":
//     case "Mushrooms":
//     case "Olives":
//     case "Chicken":
//         console.log("These are very important ingredents on my pizza.");
//         break;
//     case "Chilli":
//         console.log(`I don't mind having ${topping} on my pizza.`);
//         break;
    
//     default:
//         console.log(`${topping} should never be on my pizza.`);
        
// }

// Activity 3
// let passW = "BatmanLovesBats";

// if (passW.length >= 8) {
//     console.log("Password Saved");
// }
// else {
//     console.log("Password is too short. Please use more than 8 characters & Try again.");
// }

// Activity 4
// let number = 10;

// if(number%3 == 0){      
//   console.log('True');  
// }
// else if(number%5 == 0){      
//     console.log('True');  
// }
// else{
//   console.log('False');
// }

// Activity 5
// let number = 300;

// if(number%3 == 0 && number%5 == 0){      
//     console.log('fizz buzz'); 
// }
// else if(number%5 == 0){      
//     console.log('buzz');  
// }
// else if(number%3 == 0){      
//     console.log('fizz');  
// }
// else{
//   console.log(`${number}`);
// }

// Activity 6
// Check is number is a palindrome
// let num2 = 1001;
// let text = num2.toString();
// let arrayText = text.split("");
// let reverseArray = arrayText.reverse();
// let joinArray = reverseArray.join("");

// if (text == joinArray){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not a Palindrome")
// } 

// // Activity 7 Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

// let time = 19;
// let placeOfWork = "Manchester"
// let townOfHome = "Sale"

// if (time < 9 && time > 7){
//     console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
// }
// else if (time > 9 && time < 18){
//     console.log(`In work in ${placeOfWork}`)
// }
// else if (time > 18 && time < 20){
//     console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
// } else {
//     console.log(`At home in ${townOfHome}`)
// }

// // Activity 8 Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last vowel in the string.

// let theString = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
// console.log(theString.lastIndexOf("i"))

// // Activity 9 Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as the first. If it is return true, otherwise return false.

// let word = "drippled"
// if (word[0] == word[word.length - 1]){
//     console.log(`${word} starts and ends with the same letter`);
// }
// else {
//     console.log(`${word} does not start and end in the same letter`);
// }

// // Activity 10 Create two variables called num1 and num2.
// // Create an if statement that checks if the result of the sum is even. If it is return the number, otherwise return the numbers multiplied together.

// let theNum1 = 2;
// let theNum2 = 15;
// let sum = theNum1 + theNum2;
// if (sum % 2 == 0){
//     console.log(sum);
// }
// else {
//     console.log(theNum1 * theNum2);
// }