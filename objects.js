// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer"
// };

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);

// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person = {
//     name: ["John Bridges"],
//     age: 36,
    
// };

// console.log(person.name);


// Activity - Alarm

// const alarmTypes = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am",
// };

// let day = "Monaday";
// let alarm;

// if (day === "Saturday" || day === "Sunday") {
//     alarm = alarmTypes.weekendAlarm;
// } else {
//     alarm = alarmTypes.weekdayAlarm;
// }

// console.log(alarm);

// Activity - Songs list
// const person = {
//     name: "John Bridges",
//     age: 36,
//     favSongs: ["Hakuna Matata", "Changes", "Juicy", "Sky's the limit", "Get Money", "Victory", "California Love", "Super Star"], 
// }

// console.log(person.favSongs);


// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ],

//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",
//         openCafe(){
//             if(this.hasSpecialOffers){
//                 return "Time for a special offer!";
//             }
//         },
//     closedCafe(){
//         return "We are closed, come back tomorrow";
//     }
// };
// console.log(cafe.openCafe());

// Activity 1 - Let's edit our person object to include.. A function called sayHi and when it's called, it should return "Hello my name is".

const person = {
    name: ["John Bridges"],
    age: 32,
    sayHello: true,
    
    sayHi () {
      if(this.sayHello){
          return `Hi! My name is ${this.name}.`;
    }
 },
};

console.log(person.sayHi());

// Activity 2 - Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a string [Your Pet Name] is eating/drinking.

const pet = {
    name:["DeeBo"],
    typeOfPet: ["Pitbull"],
    age: 2,
    colour: ["Brown"],
    hungryPet: true,

    eatAndDrink () {
        if(this.hungryPet){
            return `${this.name} is eating chicken & drinking milk.`;
        }
    },

};

console.log(pet.eatAndDrink());

// Activity 3 - Create an object called coffeeShop with key values of:
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered. They should return a string [Your Order] is... with all items chosen with costs and total costs.

let total = 0;

const coffeeShop = {
  branch: "cheshire",
  drinks: {
    coffee: 1.5,
    tea: 1,
    milk: 0.50,
  },
  food: {
    sandwich: 3,
    toastie: 2.50,
    soup: 3.50,
  },

  // drinks order
  drinksOrdered(orderList) {
    // for each item in list
    for (let i = 0; i < orderList.length; i++) {
      if (this.drinks.hasOwnProperty(orderList[i])) {
        console.log(`${orderList[i]}: £${this.drinks[orderList[i]]}`);
        total = total + this.drinks[orderList[i]];
      }
    }
  },

  // food order
  foodOrdered(orderList) {
    // for each item in list
    for (let i = 0; i < orderList.length; i++) {
      if (this.food.hasOwnProperty(orderList[i])) {
        console.log(`${orderList[i]}: £${this.food[orderList[i]]}`);
        total = total + this.food[orderList[i]];
      }
    }
  },

  // Order
  customerOrder(orderList) {
    this.drinksOrdered(orderList);
    this.foodOrdered(orderList);
    console.log(`Total: £${total}`);
  },
};

theOrder = ["tea", "coffee", "sandwich", "toastie", "soup"];

coffeeShop.customerOrder(theOrder);