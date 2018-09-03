import { Observer } from './IObserver';
import { Subject } from './ISubject';

export class RandomNumbers implements Subject {
  private observers: Observer[] = [];
  private randomNumber: number;

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    this.observers.forEach(observer => {
      observer.update(this.randomNumber);
    });
  }

  public setRandomNumber(number: number) {
    this.randomNumber = number;
    this.notifyObservers();
  }
}
