import run from '../index.js';
import randomNumber from '../random.js';

const rule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
let rightAnswer = 'Yes';
const minRange = 1;
const maxRange = 50;

const checkPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const start = () => {
  const randomNumberPrime = randomNumber(minRange, maxRange);
  const numberQuestion = randomNumberPrime;
  rightAnswer = String(checkPrime(randomNumberPrime));

  return [numberQuestion, rightAnswer];
};

export default () => {
  run(rule, start);
};
