import run from '../index.js';
import randomNumber from '../random.js';

const checkChet = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const start = () => {
  const question = randomNumber(minRange, maxRange);
  const rightAnswer = checkChet(question);
  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
