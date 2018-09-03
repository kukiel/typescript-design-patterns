import { ISubject } from './ISubject';

export class RealSubject implements ISubject {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public action() {
    console.log(`Real action (${this.name}) has been performed.`);
  }
}
