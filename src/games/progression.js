import run from '../index.js';
import randomNumber from '../random.js';

const rule = 'What number is missing in the progression?';
const minRange = 1;
const maxRange = 5;
const lengthProgression = 10;

const getProgression = (stepProgression, startValue = randomNumber(minRange, maxRange)) => {
  const progression = [startValue];
  for (let i = 1; i < lengthProgression; i += 1) {
    progression.push(progression[i - 1] + stepProgression);
  }
  return progression;
};

const start = () => {
  const stepProgression = randomNumber(minRange, maxRange);
  const progression = getProgression(stepProgression);
  const hidenIndex = randomNumber(minRange, maxRange);
  const hidenNumber = progression[hidenIndex];
  progression[hidenIndex] = '..';
  const question = progression.join(' ');
  const rightAnswer = String(hidenNumber);

  return [question, rightAnswer];
};

export default () => {
  run(rule, start);
};
