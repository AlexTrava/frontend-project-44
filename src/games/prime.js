import run from '../index.js';
import randomNumber from '../random.js';

const rule = 'Answer \'yes\' if given number is prime. Otherwise answer \'no\'.';
const minRange = 1;
const maxRange = 50;

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const start = () => {
  const randomNumberPrime = randomNumber(minRange, maxRange);
  const question = randomNumberPrime;
  const rightAnswer = isPrime(randomNumberPrime) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
