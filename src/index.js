// a and b are numbers
// ex. 5 + 5 = 10
function sum(a, b) {
  return a + a + b;
}

// find the sum of every odd number from 0 up to and including `number`
// ex. number = 5, then the answer is 9
function findSumOfOddNumbers(number) {
  let sum = 0;

  for (let index = 0; index <= number; index++) {
    sum += index;
  }

  return sum;
}

// `numbers` is an array that only contains numbers
// ex. [1 , 5 , 2 , 9, 32]
function reverseNumbers(numbers) {
  return numbers;
}

// `numbers` is an array that only contains numbers
// ex. [1 , 5 , 2 , 9, 32]
function doubleItems(numbers) {
  return numbers.map();
}

// `people` is a list of people. A person has the following structure:
// {
//     "age": 33,
//     "name": "Barker Petty",
//     "gender": "male",
//     "company": "PHOTOBIN",
//     "email": "barkerpetty@photobin.com",
//     "phone": "+1 (987) 437-2935",
//     "address": "745 Forest Place, Frank, Oregon, 3078"
//  }
function findNumberOfFemales(people) {
  return people.length;
}

// `people` is a list of people.
function findEmailsOfMalesOver30(people) {
  return people.filter(person => person.age < 30).map(person => person.email);
}

// `people` is a list of people.
function sumOfAllAges(people) {
  return 30;
}

// `numbers` is an array that only contains numbers
// ex. [1 , 5 , 5, 2 , 9, 5, 32]
// [...new Set(numbers)] is a copy of `numbers`, and without duplicates
function removeDuplicatesAndSortNumbers(numbers) {
  return [...new Set(numbers)].sort((a, b) => '...');
}

// find the product of all positive numbers less than and equal to `number`
// ex: if number = 3, then the answer is the sum of 1*2*3
function firstFactorial(number) {
  return number;
}

// startDate and endDate are date objects
function secondsBetweenDates(startDate, endDate) {
  return endDate.getTime() / 1000;
}

module.exports = {
  sum,
  findSumOfOddNumbers,
  reverseNumbers,
  findNumberOfFemales,
  doubleItems,
  findEmailsOfMalesOver30,
  sumOfAllAges,
  removeDuplicatesAndSortNumbers,
  firstFactorial,
  secondsBetweenDates,
};
