import { IDuck } from './IDuck';
import { ITurkey } from './ITurkey';

export class TurkeyAdapter implements IDuck {
  private turkey: ITurkey;

  constructor(turkey: ITurkey) {
    this.turkey = turkey;
  }

  public quack(): void {
    this.turkey.gobble();
  }

  public fly(): void {
    if (Math.round(Math.random() * 5) === 0) {
      this.turkey.fly();
    }
  }
}
