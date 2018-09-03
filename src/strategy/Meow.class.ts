import { SoundBehaviour } from './ISoundBehaviour';

export class Meow implements SoundBehaviour {
  public makeSound() {
    console.log('Meow ;)');
  }
}
