import { LogRandomNumbers } from './LogRandomNumbers.class';
import { RandomNumbers } from './RandomNumbers.class';

export default function() {
  const randomNumbers = new RandomNumbers();
  const logRandomNumbers = new LogRandomNumbers(randomNumbers);

  setInterval(() => {
    const number: number = Math.round(Math.random() * 1000);
    randomNumbers.setRandomNumber(number);
  }, 1000);

  setTimeout(() => {
    randomNumbers.removeObserver(logRandomNumbers);
  }, 2000);
}
