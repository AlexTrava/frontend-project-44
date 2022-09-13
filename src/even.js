import run from './index.js';

const randomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const checkChet = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
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
