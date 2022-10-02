import run from '../index.js';
import randomNumber from '../random.js';

const checkChet = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rule = 'Answer \'yes\' if number even otherwise answer \'no\'.';
let rightAnswer = 'yes';
const minRange = 1;
const maxRange = 10;

const start = () => {
  const numberQuestion = randomNumber(minRange, maxRange);
  rightAnswer = checkChet(numberQuestion);
  return [numberQuestion, rightAnswer];
};

export default () => {
  run(rule, start);
};
