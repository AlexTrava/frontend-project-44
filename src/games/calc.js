import run from '../index.js';
import randomNumber from '../random.js';

const operationList = ['+', '-', '*'];

const randomOperation = (array) => array[randomNumber(0, 2)];

const rule = 'What is the result of the expression?';
const minRange = 1;
const maxRange = 100;

const resultCalculate = (numberOne, numberTwo, charOperation) => {
  switch (charOperation) {
    case '+':
      return numberOne + numberTwo;
    case '-':
      return numberOne - numberTwo;
    case '*':
      return numberOne * numberTwo;
    default:
      return Error(`Wrong operation ${charOperation}`);
  }
};

const start = () => {
  const numberOne = randomNumber(minRange, maxRange);
  const numberTwo = randomNumber(minRange, maxRange);
  const charOperation = randomOperation(operationList);
  const question = `${numberOne} ${charOperation} ${numberTwo}`;
  const rightAnswer = String(resultCalculate(numberOne, numberTwo, charOperation));

  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
