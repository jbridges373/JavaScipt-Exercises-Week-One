// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdraw ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdraw ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp (7,3);
// console.log(addUp(2,5));

// const multiplyByFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByFifths (celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F");

// Activity 1

// const factorial = (n) => {
//     if ((n === 0 ) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// console.log(factorial(33));

// Activity 2

// let orderCount = 0;

// const takeOrder = (topping, size) => {
//     console.log(`Pizza with ${topping} size ${size}`);
//     orderCount++;
// }

// takeOrder("pineapple", "12 inches");

// Activity 3
// cash machine withdrawal code
// js

let pinCorrect = false;
let attempts = 0;
let balance = 1000;

// define withdraw function
const withdraw = (pin, amount) => {
  
  // pin check
  if(pin === 1111) {
    pinCorrect = true
  }
  else(pinCorrect = false);
  
  // lock out of the account if attempts > 3
  if (attempts >= 3) {
    console.log(`This account is now LOCKED for security reasons.`)
  } 
  
  // both correct - withdraw
  else if(pinCorrect === true && balance >= amount) {
    console.log(`You have successfully withdrawn £${amount}. \n Your NEW balance is now £${balance - amount}`)
    balance = balance - amount
  }
  
  // both incorrect
  else if (pinCorrect === false && balance < amount) {
    attempts++
    console.log(`PIN incorrect. Withdrawal unsuccessful. Please Try again. \nAttempts made: ${attempts} `)
    console.log(`Three unsuccessful PIN attempts will lock you out of this account for security reasons.`)
  } 
  
  // pin false, enough balance available
  else if (pinCorrect === false && balance >= amount) {
    attempts ++
    console.log(`PIN incorrect. Withdrawal unsuccessful. Please Try again. \nAttempts made: ${attempts}`)
    console.log(`Three unsuccessful PIN attempts will lock you out of this account for security reasons.`)
  } 
  
  // pin true, not enough balance available
  else if (pinCorrect === true && balance < amount) {
    console.log(`You have insufficient funds in this account. Withdrawal unsuccessful.`)
  } 
  
  // any other option
  else {
    console.log(`Something went wrong. Withdrawal unsuccessful.`)
  }
  
}

withdraw(1234, 500);
withdraw(1111, 2000);
withdraw(1111,300);
withdraw(2222, 5000);
withdraw(3333, 100);
withdraw(4444, 10000);

// use withdraw(pin, amount) to try and withdraw some cash