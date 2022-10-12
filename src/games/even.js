import run from '../index.js';
import getRandomNumber from '../random.js';

const isEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const start = () => {
  const question = getRandomNumber(minRange, maxRange);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
