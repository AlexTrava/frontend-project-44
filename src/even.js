import readlineSync from 'readline-sync';

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

const startEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let rightAnswer = 'yes';
  const minRange = 1;
  const maxRange = 10;
  for (let i = 0; i < 3; i += 1) {
    const number = randomNumber(minRange, maxRange);
    console.log(`Question:${number}`);
    const answer = readlineSync.question('Your answer:');
    rightAnswer = checkChet(number);
    if (rightAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }
};

export default startEven;
