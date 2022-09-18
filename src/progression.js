import run from './index.js';

const rule = 'What number is missing in the progression?';
let rightAnswer = 0;
const minRange = 1;
const maxRange = 5;
const lengthProgression = 10;

const randomNumber = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const getProgression = (stepProgression) => {
  const progression = [randomNumber(minRange, maxRange)];
  for (let i = 1; i < lengthProgression; i += 1) {
    progression[i] = progression[i - 1] + stepProgression;
  }
  return progression;
};

const start = () => {
  const stepProgression = randomNumber(minRange, maxRange);
  const progression = getProgression(stepProgression);
  const hidenIndex = randomNumber(minRange, maxRange);
  const hidenNumber = progression[hidenIndex];
  progression[hidenIndex] = '..';
  const numberQuestion = progression.join(' ');
  rightAnswer = String(hidenNumber);

  return [numberQuestion, rightAnswer];
};

export default () => {
  run(rule, start);
};
