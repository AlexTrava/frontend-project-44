import run from '../index.js';
import randomNumber from '../random.js';

const rule = 'What number is missing in the progression?';
let rightAnswer = 0;
const minRange = 1;
const maxRange = 5;
const lengthProgression = 10;

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
