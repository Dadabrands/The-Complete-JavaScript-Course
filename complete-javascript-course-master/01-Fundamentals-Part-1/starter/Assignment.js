// let country = "Nigeria";
// let continent = "Africa";
// let population = 220566034;

// console.log(country);
// console.log(continent);
// console.log(population);

// Math operators

// const now = 2039;
// const ageJoshua = now - 1991;
// const ageGrace = now - 1991;
// console.log(ageJoshua, ageGrace);
// console.log(ageJoshua * 2, ageGrace / 10, 2 ** 3);
// // 2 ** 3 means @ to the power of 3 = 2 * 2 * 2
const firstName = "Dada";
const lastName = "Joshua";
// console.log(firstName + " " + lastName);

// Assignment Operators

// let x = 10 + 5;
// console.log(x);
// // the equal sign itself is an operator
// x += 10;
// console.log(x);
// // x = 15
// // x = x + 10
// x *= 4;
// console.log(x);
// x++; // x = x + 1
// x--; //x = x - 1

// Comparison Operators
// console.log(ageGrace > ageJoshua);
// console.log(ageGrace >= 18);

// bmi = mass / height **2
// mass / (height * heght)
// mass in kg
// height in meters

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Data 1

// let marksWeight = 78; // in kg
// let marksHeight = 1.69; // in m

// let marksBMi = marksWeight / marksHeight ** 2;
// console.log(marksBMi);

// let johnWeight = 92; // in kg
// let johnHeight = 1.95; // in m

// let johnBmi = johnWeight / johnHeight ** 2;
// console.log(johnBmi);

// console.log(marksBMi > johnBmi);

// // LECTURE: Data Types Assignment

// let isIsland = "Nigeria";
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// // LECTURE: let, const and var
// language = "Yoruba";
// // const isIsland = "Nigeria" cant be declared again since it is a constant and the value doesn't need to be changed

// // LECTURE: Basic Operators

// let halfOfPopulation = population / 2;
// console.log(halfOfPopulation);
// console.log(population + 1);

// let finlandPopulation = 6000000;
// console.log(population > finlandPopulation);

// let averagePopulation = 30000000;
// console.log(population < averagePopulation);

// let description =
//   "Portugal is in Europe, and its 11 million people speak portuguese";

// // LECTURE: Strings and Template Literals

const job = "software Developer";
const year = 2045;
const birthYear = 1960;

// const Joshua =
//   "I'm " +
//   firstName +
//   ", a " +
//   (year - birthYear) +
//   " years old" +
//   " " +
//   job +
//   "!";
// console.log(Joshua);
// const joshuaNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

// console.log(joshuaNew);

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time
// using the template literal syntax

// let country2 = "Portugal";
// let population2 = "11 million";
// const description2 = `${country2} is in Europe, and its ${population2} people speak portuguese`;

// console.log(description2);

// const age = 17;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sarah can start driving license");
// } else {
//   console.log("Sarah Can't drive  yet");
// }

// const birthYear1 = 2012;
// let century;
// if (birthYear1 <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }
// console.log(century);

/* LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

// if (population > 30000000) {
//   console.log("Portugal's population is above average");
// } else {
//   console.log("Portugal's population is 22 million below average");
// }

// Coding Challenge #2

/* Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement � */

// let otherwise =
//   ` John height ${johnHeight} is higher than Mark's ${marksHeight}`;

// if (marksHeight > johnHeight) {
//   console.log("Mark is  higher than John ");
// } else {
//   console.log(otherwise);
// }


/* LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
*/

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))



// console.log(Number(numNeighbours));
// console.log( typeof numNeighbours);
// if (numNeighbours === 1) {
//   console.log("Only 1 border!")
// } else if( numNeighbours > 1)
// { console.log ("More than 1 border") }
// else { console.log("No borders")} 


// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a
// country that speaks english, has less than 50 million people and is not an
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her.
// You will need to write a condition that accounts for all of Sarah's criteria. Take
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily
// change some variables in order to make the condition true (unless you live in
// Canada :D)

// let english = true
// let LessThan50Million = true
// let island = false

// if ( english && LessThan50Million & island)
// {
//   console.log('You should live in Nigeria :)')
// } else {
//   console.log('Nigeria does not meet your criteria :(')
// }

// if ( language === 'english' && population < 50000000 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log( ` ${country} does not meet your criteria :(`)
// }



//  coding challenge 3 
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106


// let dolphinsAverage = (96 + 108 + 89 ) / 3
// let koalasAverage = (88 + 91 + 110 ) / 3
// console.log(dolphinsAverage)
// console.log(koalasAverage)

// if (dolphinsAverage > koalasAverage) {
// console.log("Dolphin Wins")
// } else if( dolphinsAverage < koalasAverage){
//   console.log("Koalas Wins")
// } else if( dolphinsAverage === koalasAverage)
//  { console.log("its a Draw")}


//  let dabonus1 = (97 + 112 + 101 ) / 3 ;
//  let kabonus1 = ( 109 + 95 + 123) / 3;

// console.log(dabonus1)
// console.log(kabonus1)

// if (dabonus1 > kabonus1 && dabonus1 >= 100) {
//   console.log("Dolphin Wins")
//   } else if( kabonus1 > dabonus1 && kabonus1 >= 100 ) { console.log("Koalas wins! ")}
//   else if( dabonus1 === kabonus1 && dabonus1 >= 100 && kabonus1 >= 100)
//    { console.log("its a Draw")}
//    else {
//     console.log("No one Wins!")  }


//  let dabonus2 = (97 + 112 + 101 ) / 3;
//  let kabonus2 = ( 109 + 95 + 106) / 3;
//  console.log(dabonus2)
// console.log(kabonus2)

// if (dabonus2 > kabonus2 && ) {
//   console.log("Dolphin Wins")
//   }
//    else if ( dabonus2 < kabonus2 && ){ console.log("Koalas Wins")} 

//   else if( dabonus2 === kabonus2)
//    { console.log("its a Draw")}







// const language = "english"
// switch (language) {
//   case 'chinese' :
//   case 'mandarin' : console.log('MOST number of native speakers!');
//  break;
// case 'spanish':   console.log('2nd place in number of native speakers');
// break;
// case 'english': console.log('3rd place');
// break;
// case 'hindi': console.log('Number 4');
// break;
// case 'arabic': console.log('5th most spoken language');
// break; 
// default:  console.log('Great language too :D'); }


// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator
// to log a string like this to the console: 'Portugal's population is above average'.
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to
// 130. See the different results, and set the population back to original

// let population = 2200000
// population > 30000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");
// let population = 2200000
// const pop = population > 300000 ? 'average' : 'below';


// let billValue = 275;
// let  tip = billValue <= 300&& billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
// console.log(`the bill was ${billValue}, the tip was ${tip}, and the total value ${billValue + tip} `);



// function fruitProcessor(apples, oranges) {
//  console.log (apples, oranges); 
//  const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//  return juice;
// }

// const appleJuice = fruitProcessor(5,0)
// console.log (appleJuice) 

// function declararation

function calcAge1(birthYear) {
    return 2037- birthYear;
}
calcAge1(1991)

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge1(1991)
// Arrow function

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilREtirement = (birthyear, firstName) => {
const age = 2037 - birthyear;
const retirement = 65 - age;
// return retirement;
return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilREtirement(1991, "Joshua" )); 



const friends = [ 'michael', 'Steven' , 'Peter' ];
console.log(friends);
// Literal syntax 




// Introduction to arrays 




const years1 = new Array [ 1991, 1984, 2008, 2020];
//  we created an array here using the Array function we called it using the parenthesis  

// to get them out we use the square bracket syntax 

console.log(friends[0]);
// to get the element at position 0

// we can get the actual no of itenms inside an array (useful because we don't have to count the numberof element in the array)
console.log(friends.length);

// to get the index of the last elementr in the array
console.log(friends [friends.length - 1]); 

// to add elements into the array (change or mutate the array)
friends[2] = 'jay'

// only Primitive Values are immutable and an array is not a primitive value so we can change it and mutate it 
//  We can mutate and array even though they are delcare with 'const'. we canot replace the entire array though -- e.g friends = ['bob','joshua']

//   Array Can hold differrent data types at the same time
const Joshua = [ 'Dada', 'Joshua' ,  2020 - 2005, 'teacher' , friends] 

console.log(Joshua)
console.log(Joshua,length)

//  Exercise 
const calcAgeNew = function (birthYear) {
    return 2037 - birthYear; }

    const years = [1990, 19667, 2002, 2010, 2018]

// console.log(calcAgeNew(years)); 
// not going to work you will get an error
// you can't do operation with array 

// but you can do operaations with individual elements in arrays
const age1a = calcAgeNew(years[0])
const age1b = calcAgeNew(years[1])
const age1c = calcAgeNew(years[2]) 
//  or  const age1c = calcAgeNew(years[years.length - 1]); 

// its stored in a new variable 'age1a - 1c

// but we can take it a bit further since we started with an array we can end it in an array but storing it in a new variable 'ages'

const ages = [calcAgeNew(years[0]), calcAgeNew(years[1]), calcAgeNew(years[2]) ];  

//  and finally logging it in the console
console.log(ages);


// Basic Array Operations

//  Array Methods in Javascript 

const friendds = [ 'Micheal', ' Joshua' , 'Segun' ]

//  The Push Methods  Adds elements to the end of an array

friendds.push('Jonathan');
// console.log(friendds) to check if it hass been added

// since push is a function it can aslo return something and the value it return is the lenght of the new array 

// to add element to the beginning of the array
// we use the unshift method

friendds.unshift('John')

// to remove elements 

friendds.pop(); // Last

// pop method returned the removed element,  when you add store it in a new variable, const popped = friendds.pop[] the console.log(popped)

friendds.shift()
//  to remove the first  || no argument is needed here

console.log(friendds.indexOf('Segun'))
console.log(friendds.indexOf('Joshua'))

// if you put element that is not in the array you will get a negative value 
console.log(friendds.indexOf('James'))

// a simiar method to .indexof ( an es6 method)
//   we get a true or false || a true if the element is in the array and a false if the element is not in the array || This Method uses strict equality  || Meaanig it deosn't do type coercion (i.e string "23" is different from number 23)

console.log(friendds.includes('Segun'))


// we can use the incles method to write conditions
if (friendds.includes('Segun')) {console.log('you have a friend called Segun')}

// LECTURE: Introduction to Arrays Assignment

// Step 1: Create an array containing 4 population values of 4 countries
var populations = [1409517397 , 1366417754 , 332915073 , 213993437 ];  // China: 1,409,517,397 | India: 1,366,417,754 | United States: 332,915,073 | Brazil: 213,993,437 

// Step 2: Log whether the array has 4 elements or not
console.log(populations.length === 4);
// The '.length' property of an array returns the number of elements in the array.
// Here, I then compare the length of the 'populations' array to 4 and log the result.
// If the length is 4, it will output 'true', otherwise 'false'.

// Step 3: Create an array containing percentages of world population
var percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3])
];
// I create a new array called 'percentages' to store the computed percentages.
// For each population value in the 'populations' array, we call the 'percentageOfWorld1' function and pass the value as an argument.
// The returned percentage value is stored in the corresponding position in the 'percentages' array.
// Note: Make sure you have the 'percentageOfWorld1' function defined before using it.

// Explanation of 'percentageOfWorld1' function:
// This function should calculate the percentage of a given population compared to the world population.

function percentageOfWorld1(population) {
  return (population / 7900000000) * 100; // As of September 2021, the estimated world population is approximately 7,900,000,000 (7.9 billion) people.
}
// The 'percentageOfWorld1' function takes a population value as a parameter.
// It divides the given population by the assumed world population (7.9 billion) and then multiplies it by 100 to get the percentage.
// The calculated percentage is returned by the function.


// LECTURE: Basic Array Operations (Methods)
// 1. Create an array containing all the neighbouring countries of a country of your
// choice. Choose a country which has at least 2 or 3 neighbours. Store the array
// into a variable called 'neighbours'
// 2. At some point, a new country called 'Utopia' is created in the neighbourhood of
// your selected country. So add it to the end of the 'neighbours' array
// 3. Unfortunately, after some time, the new country is dissolved. So remove it from
// the end of the array
// 4. If the 'neighbours' array does not include the country ‘Germany’, log to the
// console: 'Probably not a central European country :D'
// 5. Change the name of one of your neighbouring countries. To do that, find the
// index of the country in the 'neighbours' array, and then use that index to
// change the array at that index position. For example, you can search for
// 'Sweden' in the array, and then replace it with 'Republic of Sweden'.


// Step 1: Create an array containing neighbouring countriescd
var neighbours = ["France", "Spain", "Italy"]; // Replace with neighbouring countries of your choice

// Step 2: Add a new country called 'Utopia' to the end of the 'neighbours' array
neighbours.push("Utopia");
// The '.push()' method is used to add elements to the end of an array.
// I added the string 'Utopia' to the 'neighbours' array.

// Step 3: Remove the last country from the 'neighbours' array
neighbours.pop();
// The '.pop()' method is used to remove the last element from an array.
// In this case, I remove the last country that was added ('Utopia').

// Step 4: Check if 'Germany' is in the 'neighbours' array
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
// The '.includes()' method is used to check if an array contains a specific element.
// If 'Germany' is not found in the 'neighbours' array, it means it's not one of the neighbouring countries.
// In that case, the message "Probably not a central European country :D" is logged to the console.

// Step 5: Change the name of a neighbouring country
var index = neighbours.indexOf("Spain");
if (index !== -1) {
  neighbours[index] = "Republic of Spain";
}
// The '.indexOf()' method is used to find the index of an element in an array.
// We search for the index of 'Spain' in the 'neighbours' array.
// If 'Spain' is found (index is not -1), we use the index to change the value at that position to 'Republic of Spain'.

console.log(neighbours);
// Output the updated 'neighbours' array to see the changes.

// LECTURE: Introduction to Objects
// 1. Create an object called 'myCountry' for a country of your choice, containing
// properties 'country', 'capital', 'language', 'population' and
// 'neighbours' (an array like we used in previous assignments)

let myCountry= {
    country: 'Nigeria',
    capital: 'Lagos',
    language: 'yoruba' , 
neighbours : ['korea', 'costa-rica', 'Ghana']




// LECTURE: Dot vs. Bracket Notation
// 1. Using the object from the previous assignment, log a string like this to the
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then
// decrease it by two million using brackets notation.




}




















