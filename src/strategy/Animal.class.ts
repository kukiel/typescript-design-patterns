import { SoundBehaviour } from './ISoundBehaviour';

export abstract class Animal {
  protected name: string;
  protected soundBehaviour: SoundBehaviour;

  constructor(name: string) {
    this.name = name;
  }

  public setSoundBehaviour(soundBehaviour: SoundBehaviour) {
    this.soundBehaviour = soundBehaviour;
  }

  public makeSound() {
    this.soundBehaviour.makeSound();
  }

  public abstract sayMyName(): void;
}
