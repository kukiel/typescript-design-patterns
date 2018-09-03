import { Animal } from './Animal.class';
import { Meow } from './Meow.class';

export class Cat extends Animal {
  constructor(name: string) {
    super(name);
    this.soundBehaviour = new Meow();
  }

  public sayMyName() {
    console.log(`I am sweet cat ${this.name}`);
  }
}
