import run from '../index.js';
import getRandomNumber from '../random.js';

const rule = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 5;
const lengthProgression = 10;

const getProgression = (stepProgression, startValue = getRandomNumber(minRange, maxRange)) => {
  const progression = [startValue];
  for (let i = 1; i < lengthProgression; i += 1) {
    progression.push(progression[i - 1] + stepProgression);
  }
  return progression;
};

const start = () => {
  const stepProgression = getRandomNumber(minRange, maxRange);
  const progression = getProgression(stepProgression);
  const hiddenIndex = getRandomNumber(minRange, maxRange);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  const rightAnswer = String(hiddenNumber);

  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
