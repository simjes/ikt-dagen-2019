const sum = require('../src/index').sum;
const people = require('../src/people.json');
const findSumOfOddNumbers = require('../src/index').findSumOfOddNumbers;
const reverseNumbers = require('../src/index').reverseNumbers;
const findNumberOfFemales = require('../src/index').findNumberOfFemales;
const doubleItems = require('../src/index').doubleItems;
const findEmailsOfMalesOver30 = require('../src/index').findEmailsOfMalesOver30;
const sumOfAllAges = require('../src/index').sumOfAllAges;
const removeDuplicatesAndSortNumbers = require('../src/index')
  .removeDuplicatesAndSortNumbers;
const firstFactorial = require('../src/index').firstFactorial;
const secondsBetweenDates = require('../src/index').secondsBetweenDates;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of odd numbers from 1 to 20 is 100', () => {
  expect(findSumOfOddNumbers(20)).toBe(100);
});

test('list is reversed', () => {
  const numbers = [0, 11, 2, 3];

  expect(reverseNumbers(numbers)).toStrictEqual([3, 2, 11, 0]);
});

test('every number is doubled', () => {
  const numbers = [22, 2, 5, 67, 1];

  expect(doubleItems(numbers)).toStrictEqual([44, 4, 10, 134, 2]);
});

test('five people are female', () => {
  expect(findNumberOfFemales(people)).toBe(5);
});

test('find emails of males over 30', () => {
  expect(findEmailsOfMalesOver30(people)).toStrictEqual([
    'barkerpetty@photobin.com',
    'cooleysanford@optique.com',
    'dicksongutierrez@gracker.com',
    'morancherry@comtrek.com',
    'marshturner@calcula.com',
  ]);
});

test('sum of all ages should be 358', () => {
  expect(sumOfAllAges(people)).toBe(358);
});

test('there are 86400 seconds until the same time tomorrow', () => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);

  expect(secondsBetweenDates(now, tomorrow)).toBe(86400);
});

test('only unique items in array', () => {
  const numbers = [1, 5, 66, 5, 20, 1, 2, 5, 7];

  expect(removeDuplicatesAndSortNumbers(numbers)).toStrictEqual([
    1,
    2,
    5,
    7,
    20,
    66,
  ]);
});

test('find factorial of 4', () => {
  expect(firstFactorial(4)).toBe(24);
});
