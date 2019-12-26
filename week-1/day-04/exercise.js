'use strict';
//1. Solar system
// Saturn is missing from the planetList
// Insert it into the correct position
// Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"
console.log('======== 1 ========');

const planetList = ['Mercury','Venus','Earth','Mars','Jupiter','Uranus','Neptune'];
const putSaturn = (planetList) => {
    planetList.forEach( planet => { 
        planet === 'Jupiter' ? planetList.splice(planetList.indexOf(planet)+1, 0, "Saturn") : 1;
    })
    return planetList
}
console.log(putSaturn(planetList));



//2. Match making
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
console.log('======== 2 ========');

const girls = ["Eve","Ashley","Claire","Kat","Jane"];
const boys = ["Joe","Fred","Tom","Todd","Neef","Jeff"];

const makingMatches = (girls, boys) => {
    const index = Math.max(girls.length, boys.length);
    const matchingArray = [];

    for(let i = 0; i < index; i++) {
        matchingArray.push(girls.shift());
        matchingArray.push(boys.shift());
    }
    matchingArray.map( guy => { 
        guy === undefined ? matchingArray.splice(matchingArray.indexOf(guy)) : 1 
    })
    return matchingArray;
}
console.log(makingMatches(girls, boys));



//3. Element finder
// Write a function that checks if the array contains "7"
// if it contains return "Hoorray" otherwise return "Noooooo"
console.log('======== 3 ========');

const numbers = [1, 2, 3, 4, 5, 6, 8];
const containsSeven = (numbers) => {
    let isContainsSeven = false
    numbers.forEach(i => {
        i === 7 ? isContainsSeven=true : 1
    })
    return isContainsSeven? "Hoorray!" : "Noooooo >0<"
}

console.log(containsSeven([1, 2, 3, 4, 5, 6, 8]));
console.log(containsSeven([1, 2, 3, 4, 5, 6, 7, 8]));



//4. Is in list?
// Check if array contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// it should return "true" if it contains all, otherwise "false"
console.log('======== 4 ========');

let listOfNumbers = [2, 4, 6, 8, 10, 12, 14, 16];
let numCheck = [4, 8, 12, 16];
const checkNums = (listOfNumbers, numCheck) => {
    let isCheckingSuccessful = true;
    numCheck.forEach(number => {
        listOfNumbers.indexOf(number) ? 1 : isCheckingSuccessful = false
    })    
    return isCheckingSuccessful
}

console.log(checkNums(listOfNumbers, numCheck));


//5. Quote swap
// Accidentally I messed up this quote from Richard Feynman.
// Two words are out of place
// Your task is to fix it by swapping the right words with code
// Also, log the sentence to the console with spaces in between.
// Expected output: "What I cannot create I do not understand."
console.log('======== 5 ========');

const words = ["What", "I", "do", "create,", "I", "cannot", "not", "understand."];
const quoteSwap = (words) => {
    [words[words.indexOf("cannot")],words[words.indexOf("do")] ] =[words[words.indexOf("do")], words[words.indexOf("cannot")]];
    let sentence= words.join(' ');
    return sentence
}
console.log(quoteSwap(words));

const students = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ]
  
  //6. Students filter
  // create a function that takes a list of students and logs:
  // - Who has got more candies than 4 candies
  // create a function that takes a list of students and logs: 
  //  - how many candies they have on average
  console.log('======== 6 ========');

  const studentsArr = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 }
  ]

  const moreThanFour = () => {
    let moreCandiesStudents = [];
    studentsArr.forEach( student => {
        student.candies > 4 ? moreCandiesStudents.push(student.name) : 1
    })
    return moreCandiesStudents
  }
  console.log(moreThanFour());

  const averageCandies = () => {
      let allCandies = 0;
      studentsArr.forEach(student => {
          allCandies += student.candies;
      })
      return allCandies/(studentsArr.length);
  }
  console.log(averageCandies())



  //7. Festival entry
  // Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival
  // If guns are found, remove them and put them on the watchlist (only the names)
  // If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival
    console.log('======== 7 ========');

    const watchlist = [];
    let securityAlcholLoot = 0;

    const queue = [
    { name: 'Amanda', alcohol: 10, guns: 1 },
    { name: 'Mark', alcohol: 0, guns: 0 },
    { name: 'Dolores', alcohol: 0, guns: 1 },
    { name: 'Wade', alcohol: 1, guns: 1 },
    { name: 'Anna', alcohol: 10, guns: 0 },
    { name: 'Rob', alcohol: 2, guns: 0 },
    { name: 'Joerg', alcohol: 20, guns: 0 }
    ];

    const securityCheck = (queue) => {
       queue.forEach(item => {
            if(item.guns){
                watchlist.push(item.name);
                console.log(queue.indexOf(item));
                queue.splice(queue.indexOf(item), 1, 0);
            }
            if(item.alcohol){
                securityAlcholLoot+= item.alcohol;
                item.alcohol = 0;
            }
        })

        console.log(securityAlcholLoot)
        let newQueue = queue.filter(item => {return item != 0})
        console.log(newQueue)
    }
    
    securityCheck(queue);
    console.log(watchlist)
    