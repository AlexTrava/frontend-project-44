import run from '../index.js';
import randomNumber from '../random.js';

const findGcd = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    return numberOne;
  }
  return findGcd(numberTwo, numberOne % numberTwo);
};

const rule = 'Find the greatest common divisor of given numbers.';
let rightAnswer = 0;
const minRange = 1;
const maxRange = 100;

const start = () => {
  const numberOne = randomNumber(minRange, maxRange);
  const numberTwo = randomNumber(minRange, maxRange);
  const numberQuestion = `${numberOne} ${numberTwo}`;
  rightAnswer = String(findGcd(numberOne, numberTwo));

  return [numberQuestion, rightAnswer];
};

export default () => {
  run(rule, start);
};
