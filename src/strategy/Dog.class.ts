import { Animal } from './Animal.class';
import { Bark } from './Bark.class';

export class Dog extends Animal {
  constructor(name: string) {
    super(name);
    this.soundBehaviour = new Bark();
  }

  public sayMyName() {
    console.log(`I am dog called ${this.name}`);
  }
}
