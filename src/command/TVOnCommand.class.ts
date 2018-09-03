import { TV } from './TV.class';

export class TVOnCommand {
  private tv: TV;

  constructor(tv: TV) {
    this.tv = tv;
  }

  public execute(): void {
    this.tv.on();
  }
}
