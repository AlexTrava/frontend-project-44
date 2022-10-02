import readlineSync from 'readline-sync';

const round = 3;

export default (rule, start) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);

  for (let i = 0; i < round; i += 1) {
    const [numberQuestion, rightAnswer] = start();
    console.log(`Question: ${numberQuestion}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
