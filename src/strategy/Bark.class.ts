import { SoundBehaviour } from './ISoundBehaviour';

export class Bark implements SoundBehaviour {
  public makeSound() {
    console.log('Bark !!!');
  }
}
