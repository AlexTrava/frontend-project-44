import run from '../index.js';
import randomNumber from '../random.js';

const char = ['+', '-', '*'];

const randomChar = (array) => {
  const numberChar = randomNumber(0, 2);
  return array[numberChar];
};

const rule = 'What is the result of the expression?';
let rightAnswer = 0;
const minRange = 1;
const maxRange = 100;

const resultCalculate = (numberOne, numberTwo, charOperator) => {
  switch (charOperator) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return 'Error operator. Try again.';
  }
};

const start = () => {
  const numberOne = randomNumber(minRange, maxRange);
  const numberTwo = randomNumber(minRange, maxRange);
  const charOperator = randomChar(char);
  const numberQuestion = `${numberOne} ${charOperator} ${numberTwo}`;
  rightAnswer = String(resultCalculate(numberOne, numberTwo, charOperator));

  return [numberQuestion, rightAnswer];
};

export default () => {
  run(rule, start);
};
