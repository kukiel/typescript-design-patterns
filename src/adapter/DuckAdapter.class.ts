import { IDuck } from './IDuck';
import { ITurkey } from './ITurkey';

export class DuckAdapter implements ITurkey {
  private duck: IDuck;

  constructor(duck: IDuck) {
    this.duck = duck;
  }

  public gobble(): void {
    this.duck.quack();
  }

  public fly(): void {
    if (Math.round(Math.random() * 5) === 0) {
      this.duck.fly();
    }
  }
}
