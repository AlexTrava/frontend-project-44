import run from '../index.js';
import getRandomNumber from '../random.js';

const operationList = ['+', '-', '*'];

const randomOperation = (array) => array[getRandomNumber(0, array.length - 1)];

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
      throw new Error(`Wrong operation: '${charOperation}'.`);
  }
};

const start = () => {
  const numberOne = getRandomNumber(minRange, maxRange);
  const numberTwo = getRandomNumber(minRange, maxRange);
  const charOperation = randomOperation(operationList);
  const question = `${numberOne} ${charOperation} ${numberTwo}`;
  const rightAnswer = String(resultCalculate(numberOne, numberTwo, charOperation));

  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
