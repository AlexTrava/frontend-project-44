import run from '../index.js';
import randomNumber from '../random.js';

const isEVen = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const start = () => {
  const question = randomNumber(minRange, maxRange);
  const rightAnswer = isEVen(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
