import { DisplayNumbers } from './IDisplayNumbers';
import { Observer } from './IObserver';
import { Subject } from './ISubject';

export class LogRandomNumbers implements Observer, DisplayNumbers {
  private number: number;
  private randomNumbers$: Subject;

  constructor(subject: Subject) {
    this.randomNumbers$ = subject;
    this.randomNumbers$.registerObserver(this);
  }

  public update(number: number) {
    this.number = number;
    this.display();
  }

  public display() {
    console.log(this.number);
  }
}
